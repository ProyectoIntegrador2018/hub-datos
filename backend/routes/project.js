const express = require("express");
const data = require("./../data/data.json");
const { Projects } = require("./../models/Project");

const project = express.Router();

project.get("/", (req, res) => {
    // return res.json(data);
    Projects.getAllProjects()
        .then(projects => {
            return res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.statusMessage = 'Project GET /: Error en base de datos al obtener todos los proyectos.';
            return res.status(500).end();
        });
});

project.get("/:id", (req, res) => {
    let id = req.params.id;

    Projects.getProjectByID(id)
        .then(project => {
            if(!project) {
                res.statusMessage = `Proyecto con ${id} no esta registrado en la base de datos`;
                return res.status(404).end();
            }
            return res.status(200).json(project);
        })
        .catch(err => {
            console.log(err);
            res.statusMessage = `Project GET /:id - Error en base de datos al buscar proyecto.`;
            return res.status( 500 ).end(); 
        });
});

project.post("/", express.json(), (req, res) => {
    let { nombre, descripcion, vision, tipo, numeroTotalAlumnos, metodologia, entregables, estatus, imagen } = req.body;

    if (!nombre || !descripcion || !vision || !tipo || !numeroTotalAlumnos || !metodologia || !entregables || !estatus || !imagen) {
        res.statusMessage = "Falta un dato!"
        return res.status(406).end();
    }

    let newProject = {
        nombre,
        descripcion,
        vision,
        tipo,
        numeroTotalAlumnos,
        metodologia,
        entregables,
        estatus,
        imagen
    }

    Projects.newProject(newProject)
        .then(newProject => {
            return res.status(201).json(newProject);
        })
        .catch(err => {
            console.log(err);
            res.statusMessage = 'Project POST /: Error en base de datos al guardar nuevo proyecto.';
            return res.status(500).end();
        });
});

module.exports = project;