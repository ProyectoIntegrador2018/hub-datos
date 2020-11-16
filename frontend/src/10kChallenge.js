import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import img1 from './assets/Salud.png';
import img2 from './assets/airQuality.svg';
import img3 from './assets/desSocial2.jpg';
import img4 from './assets/EquidadGenero.png';
import img5 from './assets/smartCity.svg';
import background from './assets/background10k.jpg';
import aws from './assets/aws.png';
import google from './assets/google.jpg';
import sap from './assets/sap.svg';
import './10kChallenge.css';

function DiezKChallenge() {
	return (
		<div>
			<Jumbotron
				fluid
				className="d-flex align-items-end bg-cover pl-0"
				style={{
					position: 'relative',
					backgroundImage: `url(${background})`,
					height: 400,
				}}
				data-testid="imagen-del-proyecto"
			>
				<div className="topInfo">
					<div className="px-5 py-4 text-white title10k" style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}>
						<h1>10K Challenge</h1>
						<div className="socios">
							<img src={aws} width="86" class="img-fluid img-thumbnail " />
							<img src={sap} width="86" class="img-fluid img-thumbnail " />
							<img src={google} width="86" class="img-fluid   img-thumbnail " />
						</div>{' '}
						<div className="link">
							<a className="linkRegistro" href="https://forms.gle/Fh7G2WcXST1x7Wvn7">
								<h5>Click para registrarte</h5>
							</a>
						</div>
					</div>
				</div>
			</Jumbotron>
			<Container className="Container">
				<Row className="objDesc">
					<Col>
						<h1 class="mb-0">OBJETIVO</h1>
						<p class=" text-uppercase">Tener 10k estudiantes trabajando en los problemas reales.</p>
						<h1 class="mb-0">PREMIOS</h1>
						<ul className="premios">
							<li class=" text-uppercase">Reconocimiento de participación</li>
							<li class=" text-uppercase">TBD</li>
						</ul>
					</Col>
					<Col>
						<h1 class="mb-0">DESCRIPCIÓN</h1>
						<p class=" text-uppercase">
							El 10k Challenge busca acercar a la comunidad a abordar la solución de distintos problemas
							utilizando la ciencia de datos como herramienta para encontrar Insights y tomar decisiones.
							En esta ocasión se sugiere que los equipos se inscriban a trabajar en alguno de los tracks a
							continuación.
						</p>
					</Col>
				</Row>
				<Row className="tracks">
					<Col>
						<h1 class="mb-0">TRACKS</h1>
					</Col>
				</Row>

				<div class="row text-center track1">
					<div class="col-xl-4 col-sm-6 mb-5">
						<div class="  py-5 px-4">
							<img
								src={img1}
								alt=""
								width="200"
								class="img-fluid img-thumbnail rounded-circle mb-3 shadow-sm"
							/>
							<h5 class="mb-0">SALUD</h5>
							<span class="medium text-uppercase ">
								Problemas relacionados con la salud en general, análisis de información sobre COVID.
							</span>
						</div>
					</div>
					<div class="col-xl-4 col-sm-6 mb-5">
						<div class="py-5 px-4">
							<img
								src={img2}
								alt=""
								width="200"
								class="img-fluid img-thumbnail rounded-circle mb-3 shadow-sm"
							/>
							<h5 class="mb-0">CALIDAD DEL AIRE</h5>
							<span class="medium text-uppercase ">
								Análisis de información sobre información de la calidad del aire en tu ciudad.
							</span>
						</div>
					</div>
					<div class="col-xl-4 col-sm-6 mb-5">
						<div class=" py-5 px-4">
							<img
								src={img3}
								alt=""
								width="200"
								class="img-fluid img-thumbnail rounded-circle mb-3 shadow-sm"
							/>
							<h5 class="mb-0">DESARROLLO SOCIAL</h5>
							<span class="medium text-uppercase ">
								Uso y análisis de información que ayuden a visualizar y esclarecer problemas sociales.
							</span>
						</div>
					</div>
				</div>
				<div class="row text-center track2">
					<div class="col-xl-4 col-sm-6 mb-5">
						<div class="py-5 px-4">
							<img
								src={img4}
								alt=""
								width="200"
								class="img-fluid img-thumbnail rounded-circle mb-3 shadow-sm"
							/>
							<h5 class="mb-0">EQUIDAD DE GÉNERO</h5>
							<span class="medium text-uppercase ">
								Análisis de información que apoye a las empresas y sociedad a reducir la brecha de
								género.
							</span>
						</div>
					</div>
					<div class="col-xl-4 col-sm-6 mb-5">
						<div class=" py-5 px-4">
							<img
								src={img5}
								alt=""
								width="200"
								class="img-fluid img-thumbnail rounded-circle mb-3  shadow-sm"
							/>
							<h5 class="mb-0">CIUDADES INTELIGENTES</h5>
							<span class="medium text-uppercase ">
								Estudio de información que apoye al desarrollo de las urbanizaciones.
							</span>
						</div>
					</div>
				</div>
			</Container>
			<div class="main-timeline">
				<div class="timeline">
					<div class="date-content">
						<div class="date-outer">
							<span class="date">
								<span class="month">NOVIEMBRE</span>
								<span class="year">2020</span>
							</span>
						</div>
					</div>
					<div class="timeline-content">
						<h5 class="title text-uppercase">Lanzamiento de la convocatoria</h5>
						<p class="description text-uppercase">Inicio del registro </p>
					</div>
				</div>

				<div class="timeline">
					<div class=""></div>
					<div class="date-content">
						<div class="date-outer">
							<span class="date">
								<span class="month">ENERO</span>
								<span class="year">2020</span>
							</span>
						</div>
					</div>
					<div class="timeline-content">
						<h5 class="title text-uppercase">Talleres</h5>
						<p class="description text-uppercase">Tecnológicos y de teoría (como se resuelve) </p>
					</div>
				</div>

				<div class="timeline">
					<div class=""></div>
					<div class="date-content">
						<div class="date-outer">
							<span class="date">
								<span class="month">DICIEMBRE 2020</span>
								<br />
								<span class="month">ENERO 2021</span>
							</span>
						</div>
					</div>
					<div class="timeline-content">
						<h5 class="title text-uppercase">Trabajo </h5>
					</div>
				</div>

				<div class="timeline">
					<div class=""></div>
					<div class="date-content">
						<div class="date-outer">
							<span class="date">
								<span class="month">MARZO</span>
								<span class="year">2021</span>
							</span>
						</div>
					</div>
					<div class="timeline-content">
						<h5 class="title text-uppercase">Entregas</h5>
					</div>
				</div>
				<div class="timeline">
					<div class=""></div>
					<div class="date-content">
						<div class="date-outer">
							<span class="date">
								<span class="month">ABRIL</span>
								<span class="year">2021</span>
							</span>
						</div>
					</div>
					<div class="timeline-content">
						<h5 class="title text-uppercase">Entregas</h5>
						<h5 class="title ">Premiación</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DiezKChallenge;
