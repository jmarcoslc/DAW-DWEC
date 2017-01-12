<?php
	if ($_GET) {
		header('Content-Type: text/html; charset=utf-8');
		if (isset($_GET["fecha_nacimiento"])) {
			$fecha_dividida = explode("-", $_GET["fecha_nacimiento"]);
			$fecha_correcta = checkdate($fecha_dividida[0], $fecha_dividida[1], $fecha_dividida[2]);
			if ($fecha_correcta) {
				echo "La fecha " . $_GET["fecha_nacimiento"] . " es correcta.<br>";
			} else {
				echo "La fecha " . $_GET["fecha_nacimiento"] . " NO es correcta.<br>";
			}
		}

		if (isset($_GET["codigo_postal"]) && strlen($_GET["codigo_postal"]) == 5) {
			$codigo_correcto = true;

			if ($codigo_correcto) {
				echo "El código postal " . $_GET["codigo_postal"] . " es correcto.<br>";
			} else {
				echo "El código postal " . $_GET["codigo_postal"] . " NO es correcto.<br>";
			}
		}

		if (isset($_GET["telefono"]) && strlen($_GET["telefono"]) == 9) {
			$codigo_correcto = true;

			if ($codigo_correcto) {
				echo "El teléfono " . $_GET["telefono"] . " es correcto.<br>";
			} else {
				echo "El teléfono " . $_GET["telefono"] . " NO es correcto.<br>";
			}
		}
	} else if ($_POST) {
		header("Content-type: text/xml");

		$xml = "<info>";

		if (isset($_POST["fecha_nacimiento"])) {
			$fecha_dividida = explode("-", $_POST["fecha_nacimiento"]);
			$fecha_correcta = checkdate($fecha_dividida[0], $fecha_dividida[1], $fecha_dividida[2]);
			$xml .= "<fecha>";
			if ($fecha_correcta) {
				$xml .= "La fecha " . $_POST["fecha_nacimiento"] . " es correcta.";
			} else {
				$xml .= "La fecha " . $_POST["fecha_nacimiento"] . " NO es correcta.";
			}
			$xml .= "</fecha>";
		}

		if (isset($_POST["codigo_postal"]) && strlen($_POST["codigo_postal"]) == 5) {
			$codigo_correcto = true;

			$xml .= "<codigoPostal>";
			if ($codigo_correcto) {
				$xml .= "El código postal " . $_POST["codigo_postal"] . " es correcto.";
			} else {
				$xml .= "El código postal " . $_POST["codigo_postal"] . " NO es correcto.";
			}
			$xml .= "</codigoPostal>";
		}

		if (isset($_POST["telefono"])) {
			$codigo_correcto = strlen($_POST["telefono"]) == 9;

			$xml .= "<telefono>";
			if ($codigo_correcto) {
				$xml .= "El teléfono " . $_POST["telefono"] . " es correcto.";
			} else {
				$xml .= "El teléfono " . $_POST["telefono"] . " NO es correcto.";
			}
			$xml .= "</telefono>";
		}

		$xml .= "</info>";

		echo $xml;
	}
?>