import { useGetStudentQuery } from '../../features/api/StudentsSlice';
import { useState } from 'react';
import StudentForm from './StudentForm';

export default function StudentFormConsult() {

    const [documentNumber, setDocumentNumber] = useState(''); 
    const [submittedDocument, setSubmittedDocument] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); 

    const { data: student, error, isLoading } = useGetStudentQuery(submittedDocument, {
        skip: !submittedDocument, 
    });
    

    const handleChange = (e) => {
        const value = e.target.value.toString();

        const isOnlyDigits = /^[0-9]+$/.test(value);

        const isValidLength = value.length >= 6 && value.length <= 10;

        const hasNoRepeatedSequences = /(\d)\1{5,}|(\d{2})\2{2,}|(\d{3})\3{1,}/.test(value);

        if (!isOnlyDigits) {
            setErrorMessage('El documento solo debe contener dígitos.');
        } else if (!isValidLength) {
            setErrorMessage('El documento debe tener entre 6 y 10 dígitos.');
        } else if (hasNoRepeatedSequences) {
            setErrorMessage('El documento no debe contener secuencias repetidas.');
        } else {
            setErrorMessage('');
        }
        setDocumentNumber(value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage && documentNumber) {
            setSubmittedDocument(documentNumber);
        }
    };    

    return (
        <StudentForm props={{
            handleSubmit: handleSubmit,
            documentNumber: !documentNumber,
            handleChange: handleChange,
            errorMessage: errorMessage,
            submittedDocument: submittedDocument,
            isLoading: isLoading,
            error: error,
            student: student
        }} />
    );
}