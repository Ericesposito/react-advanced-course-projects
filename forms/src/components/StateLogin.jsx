import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import useInput from '../hooks/useInput';

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput('', (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={(event) => handleEmailChange(event)}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={(event) => handlePasswordChange(event)}
          value={passwordValue}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
