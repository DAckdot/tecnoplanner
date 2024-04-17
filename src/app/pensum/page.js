"use client";

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MateriasPensum() {
  const [selectedMaterias, setSelectedMaterias] = useState([]);

  const handleClick = (materia) => {
    if (selectedMaterias.includes(materia)) {
      setSelectedMaterias(selectedMaterias.filter((m) => m !== materia));
    } else {
      setSelectedMaterias([...selectedMaterias, materia]);
    }
  };

  const materias = [
    "Introducción a la Informática",
    "Programación I",
    "Programación II",
    "Estructuras de Datos",
    "Algoritmos y Complejidad",
    "Bases de Datos",
    "Redes de Computadoras",
    "Sistemas Operativos",
    "Ingeniería de Software",
    "Arquitectura de Computadoras",
    "Teoría de la Computación",
    "Inteligencia Artificial",
    "Diseño de Interfaces de Usuario",
    "Desarrollo Web",
    "Desarrollo de Aplicaciones Móviles",
    "Seguridad Informática",
    "Criptografía",
    "Análisis y Diseño de Sistemas",
    "Programación Orientada a Objetos",
    "Programación Funcional",
    "Programación Lógica",
    "Programación Concurrente",
    "Programación de Sistemas",
    "Programación de Redes",
    "Programación de Bases de Datos",
    "Programación Web",
    "Programación de Aplicaciones Móviles",
    "Programación de Videojuegos",
    "Programación de Inteligencia Artificial",
    "Programación de Gráficos",
    "Programación de Sistemas Embebidos",
    "Programación de Sistemas Distribuidos",
    "Programación de Sistemas en Tiempo Real",
    "Programación de Sistemas de Información",
    "Programación de Sistemas Multimedia",
    "Programación de Sistemas de Comercio Electrónico",
  ];
  // Divide the array into 6 chunks for the grid
  const materiasChunks = Array.from({ length: 6 }, () => []);
  materias.forEach((materia, index) => {
    materiasChunks[index % 6].push(materia);
  });

  return (
    <Container fluid="md">
      {materiasChunks.map((materiasRow, rowIndex) => (
        <Row key={rowIndex}>
          {materiasRow.map((materia, index) => (
            <Col key={index}>
              <div>Semestre {index + 1}</div>
              <Card
                className={`bg-gray-200 p-4 cursor-pointer ${
                  selectedMaterias.includes(materia) ? "bg-red-500" : ""
                }`}
                onClick={() => handleClick(materia)}
                style={{
                  border: "1px solid black",
                  color: "black",
                  height: "100px",
                  width: "200px",
                  fontSize: "1em",
                }}
              >
                <Card.Body>{materia}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
export default MateriasPensum;
