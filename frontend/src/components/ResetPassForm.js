import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RoundedButton from '../components/RoundedButton';
import React from 'react';

const ResetPassForm = ({ setPassword, setConfirmation, _handleClick, _handleKeyDown }) => {
	return (
		<div>
			<div class="container padding-bottom-3x mb-2">
				<div class="row justify-content-center">
					<div class="col-lg-8 col-md-10">
						<h2>¿Olvidaste tu contraseña?</h2>
						<form class="card mt-4">
							<div class="card-body">
								<div class="form-group">
									<label for="email-for-pass">Resetear contraseña</label>
									<input
										className="form-control"
										type="password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</div>
								<div class="form-group">
									<label for="email-for-pass">Confirmar contraseña</label>
									<input
										className="form-control"
										type="password"
										onChange={(e) => {
											setConfirmation(e.target.value);
										}}
										onKeyDown={_handleKeyDown}
									/>
								</div>
							</div>
							<div class="card-footer text-center">
								<RoundedButton type="blackBtn" onClick={_handleClick}>
									Iniciar sesión
								</RoundedButton>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassForm;
