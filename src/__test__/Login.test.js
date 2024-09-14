import { render, screen } from "@testing-library/react";
import Login from "../Login";
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom for custom matchers

test('checking component loaded', () => {
    // Render the Login component
    render(<Login />);

    // Use getByText to check if the "Login" text is present in the document
    expect(screen.getByText(/Login/)).toBeInTheDocument();
});
test('checking email and password inputs are empty', () => {
    render(<Login />);   
    expect(screen.queryAllByPlaceholderText('email')).toHaveValue("");
    expect(screen.queryAllByPlaceholderText('password')).toHaveValue("");
});