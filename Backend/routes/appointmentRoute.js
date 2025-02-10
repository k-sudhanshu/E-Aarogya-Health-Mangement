const appointmentController = require("../controller/appointmentController");
const express = require("express");
const router = express.Router();
// router.post("/login",adminController.login);
router.post("/bookAppointment", appointmentController.bookAppointment);
router.get("/getAll", appointmentController.getAll);
router.get(
  "/getAppointmentByDoctorID/:id",
  appointmentController.getByDoctorId
);
module.exports = router;

// const express=require("express");
// const appointmentController=require("../controller/appointmentController");
// const router=express.Router();

// router.post("/bookAppointment",appointmentController.bookAppointment);
// __esModule.exports=router;
