<?php
	if ($_POST) {
		header("Content-type: text/xml");

		$xml = "<info>";

		if (isset($_POST["usuario"])) {
			$usuario_correcto = rand(0,1);
			$alternativas = [rand(1,2000), "o_O", "alter"];

			$xml .= "<usuario>";
			$xml .= $usuario_correcto;
			$xml .= "</usuario>";

			if (!$usuario_correcto) {
				$xml .= "<alternativa>";
					for ($i=0; $i < sizeof($alternativas); $i++) {
						$xml .= $_POST["usuario"] . "_" . $alternativas[$i] . "\n";
					}
				$xml .= "</alternativa>";
			}
		}

		$xml .= "</info>";

		echo $xml;
	}
?>