const mongoose = require("mongoose");
const uuid = require("uuid");

const projectSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: uuid.v4
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    vision: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    numeroTotalAlumnos: {
        type: Number,
        required: true
    },
    metodologia: {
        type: String,
        required: true
    },
    entregables: {
        type: String,
        required: true
    },
    estatus: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

const projectModel = mongoose.model("Project", projectSchema);

const Projects = {
    getAllProjects: () => {
        return projectModel.find()
            .then(result => {
                return result;
            })
            .catch(err => {
                throw err;
            });
    },
    newProject: (project) => {
        return projectModel.create(project)
            .then(newProject => {
                return newProject;
            })
            .catch(err => {
                throw err;
            });
    },
    getProjectByID: ( id ) => {
        return projectModel.findOne({id})
            .then(result => {
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
};

module.exports = {
    Projects
}