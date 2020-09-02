<!DOCTYPE html>
<html lang="en">
<?php 
    $connect = mysqli_connect('fdb27.biz.nf','3512074_cardtrick','8660845087@Ajay');
    $db = mysqli_select_db($connect,'3512074_cardtrick');
    $query = "SELECT COUNT(ip)AS visits, SUM(visited)AS played FROM visitors";
    $result = mysqli_query($connect,$query);
    $count = mysqli_fetch_array($result);
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COUNT</title>
    <style>
        body{
            background-color: red;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        section{
            color: white;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 2rem;
            padding: 10rem;
        }

        @media only screen and (max-width: 600px){
            body{
                justify-content: left;
            }
            section{
                padding: 0rem;
                padding-top: 10rem;
            }
        }
    </style>
</head>
<body>
    <section>
        <div>
            <p><u><?php echo $count['visits']; ?></u> PEOPLE HAVE VISITED YOUR SITE</p>
        </div>
        <div>
            <p>CARD TRICK HAS BEEN PLAYED FOR <u><?php echo $count['played']; ?></u> TIMES</p> 
        </div>
    </section>
</body>
</html>