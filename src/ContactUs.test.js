import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import ContactUsForm from './ContactUsForm';

// Write a test to verify that if all fields except the email field are populated 
// and the user clicks the submit button, the success message is not displayed 
// and an error message is displayed.
describe('ContactUsForm', () => {

  it('will display an error if all fields except the email.', () => {
      var component = render(<ContactUsForm />);
      var depSelect = component.getByTestId('department-select');
      fireEvent.change(depSelect, { target: { value: 'sales' } });

      var questionTextArea = component.getByTestId('question-textarea');
      fireEvent.change(questionTextArea, { target: { value: 'text' } });

      var submitButton = component.getByTestId('submit-button');
      fireEvent.click(submitButton);

      expect(component.getByTestId('error-header')).toBeInTheDocument();
      expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
  });


// Write a test to verify that if all fields except the department field are 
// populated and the user clicks the submit button, the success message is not 
// displayed and an error message is displayed.
  it('will display an error if all fields except the department field.', () => {

      var component = render(<ContactUsForm />);
      
      var email = component.getByTestId('email-input');
      fireEvent.change(email, { target: { value: 'email@gmail.com' } });

      var questionTextArea = component.getByTestId('question-textarea');
      fireEvent.change(questionTextArea, { target: { value: 'text' } });

      var submitButton = component.getByTestId('submit-button');
      fireEvent.click(submitButton);

      expect(component.getByTestId('error-header')).toBeInTheDocument();
      expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
  });
  
  // Write a test to verify that if all fields except the question field are 
  // populated and the user clicks the submit button, the success message is not 
  // displayed and an error message is displayed.
  it('will display an error if all fields except the department field.', () => {

      var component = render(<ContactUsForm />);
      
      var email = component.getByTestId('email-input');
      fireEvent.change(email, { target: { value: 'email@gmail.com' } });

      var depSelect = component.getByTestId('department-select');
      fireEvent.change(depSelect, { target: { value: 'sales' } });

      var submitButton = component.getByTestId('submit-button');
      fireEvent.click(submitButton);

      expect(component.getByTestId('error-header')).toBeInTheDocument();
      expect(component.queryByTestId('success-header')).not.toBeInTheDocument();
  });


// Write a test to verify that if all fields are populated and the user clicks 
// the submit button, the success message is displayed and no error message 
// displayed.
it('will display a success message if all fields are populed.', () => {

  var component = render(<ContactUsForm />);
  
  var email = component.getByTestId('email-input');
  fireEvent.change(email, { target: { value: 'email@gmail.com' } });

  var depSelect = component.getByTestId('department-select');
  fireEvent.change(depSelect, { target: { value: 'sales' } });

  var questionTextArea = component.getByTestId('question-textarea');
  fireEvent.change(questionTextArea, { target: { value: 'text' } });

  var submitButton = component.getByTestId('submit-button');
  fireEvent.click(submitButton);

  expect(component.getByTestId('success-header')).toBeInTheDocument();
  expect(component.queryByTestId('error-header')).not.toBeInTheDocument();
});

});