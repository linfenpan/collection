<?php
    $file = $_FILES["file"];
    if($file["error"] > 0){
        echo "Error: " . $file["error"];
    }else{
        echo "Upload:" . $file["name"] . "<br/>";
        echo "Type:" . $file["type"] . "<br/>";
        echo "Size:" . ($file["size"] / 1024) . " Kb<br/>";
        // 临时的文件，会在脚本运行完之后，被删除，所以，需要保存到其它位置
        echo "Stored in:" . $file["tmp_name"];

        move_uploaded_file($file["tmp_name"], "./upload/" . $file["name"]);

        echo "Stored in: " . "upload/" . $file["name"];
    }
 ?>
