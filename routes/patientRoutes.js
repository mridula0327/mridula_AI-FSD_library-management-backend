const express = require("express");
const router = express.Router();

const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatient
} = require("../controllers/patientController");

// Search patient by name
router.get("/patients/search", searchPatient);

// Register new patient
router.post("/patients", createPatient);

// Get all patients
router.get("/patients", getAllPatients);

// Get patient by ID
router.get("/patients/:id", getPatientById);

// Update patient
router.put("/patients/:id", updatePatient);

// Delete patient
router.delete("/patients/:id", deletePatient);

module.exports = router;
