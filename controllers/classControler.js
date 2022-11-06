//Handle requests to get data instance from API
//import demo
const classData = require('../schema/timetable')

const getAllClasses = (req,res) =>{
    // console.log(classData)
    return res.render("classesPage.hbs",{data: classData})

}

module.exports = {
    getAllClasses
}