<?php

header("Access-Control-Allow-Origin: *");
require_once "Classes/PHPExcel.php";
        $tmpfname = "cfdflix.xlsx";
        $excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);
        $excelObj = $excelReader->load($tmpfname);
        $worksheet = $excelObj->getSheet(0);//
        $lastRow = $worksheet->getHighestRow();

        $data = [];
        for ($row = 2; $row <= $lastRow; $row++) {
             $data[] = [
                'title' => $worksheet->getCell('A'.$row)->getValue(),
                "link" => $worksheet->getCell('B'.$row)->getValue(),
                'presentation' => $worksheet->getCell('C'.$row)->getValue(),
                "description" => $worksheet->getCell('D'.$row)->getValue(),
                "genre" => $worksheet->getCell('E'.$row)->getValue(),
                "industry" => $worksheet->getCell('F'.$row)->getValue()
             ];
        }
header('Content-Type: application/json');
echo json_encode($data);
