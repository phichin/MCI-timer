<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Timer App</title>
</head>


<body>
    <div class="container heading">
        <h1>Timer App</h1>
    </div>

    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-stopwatch" role="tabpanel" aria-labelledby="nav-stopwatch-tab">
            <object id="objectTimer" type="text/html" data="stopwatch.html"> </object>
        </div>
        <div class="tab-pane fade" id="nav-timer" role="tabpanel" aria-labelledby="nav-timer-tab">
            <object id="objectTimer" type="text/html" data="timer.html"> </object>
        </div>
        <div class="tab-pane fade" id="nav-enom" role="tabpanel" aria-labelledby="nav-enom-tab">
            <object id="objectTimer" type="text/html" data="emom.html"> </object>
        </div>
        <div class="tab-pane fade" id="nav-abinterval" role="tabpanel" aria-labelledby="nav-abinterval-tab">
            <object id="objectTimer" type="text/html" data="abTimer.html"> </object>
        </div>
    </div>
    <nav>
        <div class="justify-content-around nav navbar-expand-lg">
            <!-- nav-tabs d-flex align-items-end-->
            <a class="nav-item nav-link active" id="nav-stopwatch-tab" data-toggle="tab" href="#nav-stopwatch"
                role="tab" aria-controls="nav-stopwatch" aria-selected="false">
                <div class="element rounded" id="stopwatch">
                    <i class="bi bi-stopwatch"></i>
                    <span class="caption">Stoppuhr</span>
                </div>
            </a>
            <a class="nav-item nav-link" id="nav-timer-tab" data-toggle="tab" href="#nav-timer" role="tab"
                aria-controls="nav-timer" aria-selected="false">
                <div class="element rounded" id="timer">
                    <i class="bi bi-alarm"></i>
                    <span class="caption">Timer</span>
                </div>
            </a>
            <a class="nav-item nav-link" id="nav-enom-tab" data-toggle="tab" href="#nav-enom" role="tab"
                aria-controls="nav-enom" aria-selected="true">
                <div class="element rounded" id="emom" aria-selected="false">
                    <i class="bi bi-arrow-clockwise"></i>
                    <span class="caption">EMOM</span>
                </div>
            </a>
            <a class="nav-item nav-link" id="nav-abinterval-tab" data-toggle="tab" href="#nav-abinterval" role="tab"
                aria-controls="nav-abinterval" aria-selected="true">
                <div class="element rounded" id="ab">
                    <i class="bi bi-arrow-repeat"></i>
                    <span class="caption">A/B</span>
                </div>
            </a>
        </div>
    </nav>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>

</body>

</html>