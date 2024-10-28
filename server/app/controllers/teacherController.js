const Teacher = require('../models/Teacher');

const getAllTeachers = async (req, res) => {
    const skip = 10;
    const limit = 10;
    try {
        const schools = await Teacher
            .find()
            .skip(skip)
            .limit(limit)
            .exec(); // paginate this data.

        res.status(200).json({
            data: schools,
            success: true,
            message: `${req.method} - request to api endpoint.`
        })
    } catch (e) {
        console.error(e);
    }
};

const getTeachersFiltered =  async (req, res) => {

    const {limit, select} = req.query;
    try {
        const {startDate, subjects} = req.query;

        const query = {
            startDate: {$gte: new Date(startDate)},
            subject: {$in: subjects.split(',')}
        }

        const teachers = await Teacher.find(query).select(select).limit(parseInt(limit));
        res.status(200).json({
            success: true,
            data: teachers,
            message: `${req.method} - request to api endpoint`
        })
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
    }
};

const createTeachers = async (req, res) => {
    let data = req.body;
    const newTeacher = await Teacher.create(data);

    console.log("data >>>", newTeacher);
    res.status(200).json({
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const getTeacherById = async (req, res) => {
    const {id} = req.params;

    let data = await Teacher.findById(id);

    res.status(200).json({
        data,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const getProperties = async (req, res) => {
    const {name} = req.param;
    
    try {
        const result = await Teacher.find()
                            .select(name)
                            .exec();

        res.status(200).json({
            result,
            success: true,
            message: `${req.method} - request to api endpoint.`
        });
    }
    catch (e) {
        console.error(e);
    }
}; 

const updateTeacher = async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const newTeacher = await Teacher.findOneAndUpdate(id, data);

    res.status(200).json({
        newTeacher,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const deleteTeacher = async (req, res) => {
    const {id} = req.params;

    await Teacher.findByIdAndDelete({ _id: id });

    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

module.exports = {
    getAllTeachers,
    createTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
    getTeachersFiltered,
    getProperties
};