import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Stepper, Step, StepLabel } from "@mui/material";
import "./SellPropertyForm.css";

const Page3Common = ({ formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handlecountryInputChange = (e) => {
    const { name, value } = e.target;

    // Specific logic for country selection if needed
    console.log(`Country selected: ${value}`);

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  return (
    <>
      <div className="col-7">
        <Form.Group  className="businessListingFormsDiv" controlId="property_title" >
          <Form.Label>TITLE</Form.Label> <span className="vallidateRequiredStar">*</span>
          <Form.Control type="text"  name="property_title" placeholder="Title (eg: 2bhk house for sale)" value={formData.property_title} onChange={handleInputChange} isInvalid={!!errors.property_title} />
          <Form.Control.Feedback type="invalid"> {errors.property_title} </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group className="businessListingFormsDiv" controlId="additional_detail" >
          <Form.Label>Additional details:</Form.Label> <span className="vallidateRequiredStar">*</span>
          <Form.Control type="text" name="additional_detail" placeholder="Eg: Recently constructed 2bhk house for sale in Indore." value={formData.additional_detail} onChange={handleInputChange} isInvalid={!!errors.additional_detail}  />
          <Form.Control.Feedback type="invalid"> {errors.additional_detail} </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group className="businessListingFormsDiv" controlId="file_name">
          <Form.Label>CHOOSE IMAGES</Form.Label>
          <Form.Control type="file" name="file_name" multiple accept="image/*" onChange={handleInputChange} /> {errors.file_name && <p className="error-text">{errors.file_name}</p>} 
          </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group className="businessListingFormsDiv" controlId="country">
          <Form.Label>COUNTRY</Form.Label>
          <span className="validateRequiredStar">*</span>
          <div className="country-options">
            {["India", "USA", "UK"].map((country) => (
              <div key={country} className={`country-option-box ${  formData.country === country ? "selected" : ""
                }`}
                onClick={() => handlecountryInputChange({ target: { name: "country", value: country },  }) } >  {country}
              </div>
            ))}
          </div>
          {errors.country && (
            <Form.Control.Feedback type="invalid" style={{ display: "block" }}> {errors.country} </Form.Control.Feedback>
          )}
        </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group className="businessListingFormsDiv" controlId="state">
          <Form.Label>STATE</Form.Label> <span className="vallidateRequiredStar">*</span>
          <Form.Select name="state" value={formData.state} onChange={handleInputChange} isInvalid={!!errors.state} >
            <option value="">Select State</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="punjab">Punjab</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid"> {errors.state} </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group className="businessListingFormsDiv" controlId="city">
          <Form.Label>TOWN/CITY</Form.Label>
          <span className="vallidateRequiredStar">*</span>
          <Form.Select name="city" value={formData.city} onChange={handleInputChange} isInvalid={!!errors.city} >
            <option value="">Select City</option>
            <option value="mumbai">Mumbai</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="delhi">Delhi</option>
            <option value="hyderabad">Hyderabad</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid"> {errors.city} </Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="col-7">
        <Form.Group controlId="asking_price" className="businessListingFormsDiv" >
        {formData.listing_type === "Selling" && (
            <>
              <Form.Label>
                PRICE <span className="vallidateRequiredStar">*</span>
              </Form.Label>
            </>
        )}
        {formData.listing_type === "Renting" && (
          <>
            <Form.Label>
              Rent <span className="vallidateRequiredStar">*</span>
            </Form.Label>
          </>
        )}
          <Form.Control type="text" name="asking_price" value={formData.asking_price} onChange={handleInputChange} placeholder="Asking Price" isInvalid={!!errors.asking_price}  />
          <Form.Control.Feedback type="invalid"> {errors.asking_price} </Form.Control.Feedback>
          </Form.Group>
      </div>

      {formData.listing_type === "Renting" &&(
      <div className="col-7">
        <Form.Group controlId="advance" className="businessListingFormsDiv">
          <Form.Label>Advance</Form.Label> <span className="vallidateRequiredStar">*</span>
          <Form.Control type="text" name="advance_price" value={formData.advance_price} onChange={handleInputChange} placeholder="Advance" isInvalid={!!errors.advance_price} />
          <Form.Control.Feedback type="invalid"> {errors.advance_price} </Form.Control.Feedback>
           </Form.Group>
      </div>
      )}

      <div className="col-7">
        <Form.Group controlId="phone_number" className="businessListingFormsDiv" >
          <Form.Label>Mobile number</Form.Label> <span className="vallidateRequiredStar">*</span>
          <Form.Control type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} placeholder="Contact Number" isInvalid={!!errors.phone_number} />
          <Form.Control.Feedback type="invalid"> {errors.phone_number} </Form.Control.Feedback>
          </Form.Group>
      </div>
    </>
  );
};

export default Page3Common;