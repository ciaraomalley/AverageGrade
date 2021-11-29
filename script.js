
    var results = new Array();
    var subjects = prompt("How many subjects would you like to enter? ");
   subjects = parseInt(subjects);
    var i = 0, total = 0;
    for(i = 0; i <= subjects - 1; i++)
    {
        results[i] = parseInt(prompt("Enter your result: "));
        total += results[i];
        document.write("Your Results: " + results[i] + "<br />");
    }
    // CALCULATE AVERAGE
    var average = total / subjects;
    document.write("Average Result: " + average + "<br />");

    /* CALCULATE GRADE

    if(average>=70 && average<=100){
        grade="A";
    }
    else if (average>=60 && average<70){
        grade="B";
    }
    else if (average>=50 && average<60){
        grade="C";
    }
    else if (average>=40 && average<50){
        grade="D";
    }
    else if (average<40 && average>0){
        grade="F";
    }
    else {
        grade="Invalid grade";
    }

    document.write("Grade: " + grade + "<br /."); */