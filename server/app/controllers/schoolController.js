const School = require('../models/School');

const getAllSchools = (req, res) => {
    const schools = School.find({}); // find all
    
    res.status(200).json({
        data: schools,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const createSchools = async (req, res) => {
    let data = req.body;
    const newSchool = await Teacher.create(data);

    console.log("data >>>", newTeacher);
    res.status(200).json({
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const getSchoolById = async (req, res) => {
    const {id} = req.params;

    let data = await School.findById(id);

    res.status(200).json({
        data,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const updateSchool = async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const newSchool = await Teacher.findOneAndUpdate(id, data);

    res.status(200).json({
        newSchool,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

const deleteSchool = async (req, res) => {
    const {id} = req.params;

    await School.findByIdAndDelete({ _id: id });

    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to api endpoint.`
    })
};

module.exports = {
    getAllSchools,
    createSchools,
    getSchoolById,
    updateSchool,
    deleteSchool
};