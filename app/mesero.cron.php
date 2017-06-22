<?php
//phpinfo();

require_once 'includes/MyDBi.old.php';
$db = new MysqliDbasfads();

//OBTENGO EL MES Y A�O ACTUAL
$anio = date('Y');
$mes = date('m');

//RECUPERO EL DIA, MES, A�O ANTERIOR
$anio_ant = ($mes == 1) ? $anio - 1 : $anio;
$mes_ant = ($mes == 1) ? 12 : $mes - 1;
//$dia = date("d", mktime(0,0,0, $mes_ant+1, 0, $anio_ant));

//ARMO LAS FECHAS PARA REALIZAR EL FILTRO
//$fecha_desde =  date('Y-m-d', mktime(0,0,0, $mes_ant, 1, $anio_ant));
//$fecha_hasta = date('Y-m-d', mktime(0,0,0, $mes_ant, $dia, $anio_ant));


//**********************************************************************************************
//Cuenta_id = 1
saveAhorro($db, '1', $anio_ant, $mes_ant, $anio, $mes);

//**********************************************************************************************
//Cuenta_id = 2
saveAhorro($db, '2', $anio_ant, $mes_ant, $anio, $mes);

//**********************************************************************************************
//Cuenta_id = 3
saveAhorro($db, '3', $anio_ant, $mes_ant, $anio, $mes);

//**********************************************************************************************
//Cuenta_id = 4
saveAhorro($db, '4', $anio_ant, $mes_ant, $anio, $mes);


//**********************************************************************************************
//**********************************************************************************************

function saveAhorro($db, $cuenta_id, $anio_ant, $mes_ant, $anio, $mes) {

  $cuenta = $db->rawQuery("SELECT
	                        IFNULL(SUM(importe),0) importe,
	                        cuenta_id
                          FROM movimientos
                          WHERE cuenta_id = '1.1.1.3" . $cuenta_id . "' and sucursal_id=" . $cuenta_id);


  $resultados = $db->rawQuery("SELECT
                            resultado_id,
                            anio,
                            mes,
                            cuenta_id,
                            total
                          FROM resultados
                          WHERE anio= " . $anio . "
                            AND mes = " . $mes . "
                            AND cuenta_id = '1.1.1.3". $cuenta_id ."'");

  if($db->count == 0) {


    $result = $db->rawQuery("SELECT
                            resultado_id,
                            anio,
                            mes,
                            cuenta_id,
                            total
                          FROM resultados
                          WHERE anio = " . $anio_ant . "
                            AND mes = " . $mes_ant . "
                            AND cuenta_id = '1.1.1.3" . $cuenta_id ."'");


    $total = $cuenta[0]['importe'] + $result[0]['total'];


    echo("<div style='color:blue;'>Inserto el registro - Cuenta_id: 1.1.1.3" . $cuenta_id .
      " - Mes: " . $mes . " - Anio: " . $anio . " - Total: " . $total . "</div>");

        $data = array(
            'anio' => $anio,
            'mes' => $mes,
            'cuenta_id' => "1.1.1.3" . $cuenta_id,
            //'total' => $result[0]['total']
            'total' => $total
        );

        $result = $db->insert('resultados', $data);
        if ($result > -1) {
            //echo ("<div style='color:green;'>Registro insertado</div>");
        } else {
            //echo ("<div style='color:red;'>Error insertando el registro</div>");
        }
    } else {
        //echo("<div style='color:red;'>Existe un registro - Cuenta_id: " . $resultados[0]['cuenta_id'] . " - Mes: " . $mes . " - Anio: " . $anio . "</div>");
    }


}