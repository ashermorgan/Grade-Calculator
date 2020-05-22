// Declare global variables
assignmentID = 0;



// Adds an assignment
function addAssignment() {
    // Create row
    var clone = document.getElementById("assignmentTemplate").content.cloneNode(true);

    // Set row id
    clone.children[0].setAttribute("id", `assignment-${assignmentID}`);
    
    // Add remove button onclick attribute
    clone.getElementById("assignmentRemove").setAttribute("onclick", `var element = document.getElementById('assignment-${assignmentID}'); element.parentNode.removeChild(element); update();`);
    
    // Add row
    document.getElementById("assignments").appendChild(clone);
    
    // Increment assignmentID
    assignmentID++;

    // Update grade and add categories
    update();
}




// Updates assignment categories and the final grade
function update() {
    // Get categories
    var categories = document.getElementsByClassName("category");

    // Update categories
    for (selectCategory of document.getElementsByClassName("selectCategory")) {
        for (var i = 0; i < categories.length; i++) {
            selectCategory.children[i].text = categories[i].getElementsByClassName("categoryName")[0].value;
            selectCategory.children[i].value = categories[i].getElementsByClassName("categoryWeight")[0].value;
        }
    }

    // Get assignment point totals
    var pointsEarned = 0;
    var pointsPossible = 0;
    for (assignment of document.getElementsByClassName("assignment")) {
        weight = parseFloat(assignment.getElementsByClassName("selectCategory")[0].value)
        pointsEarned += weight * parseFloat(assignment.getElementsByClassName("pointsEarned")[0].value)
        pointsPossible += weight * parseFloat(assignment.getElementsByClassName("pointsPossible")[0].value)
    }

    // Clear color classes
    gradeElement = document.getElementById("grade");
    gradeElement.classList.remove("letterA");
    gradeElement.classList.remove("letterB");
    gradeElement.classList.remove("letterC");
    gradeElement.classList.remove("letterD");
    gradeElement.classList.remove("letterF");

    // Calculate grade percentage
    var gradePercentage = (pointsEarned / pointsPossible) * 100;
    document.getElementById("gradePercentage").textContent = `${gradePercentage.toFixed(3)}%`;

    // Set letter and color
    if (gradePercentage >= 97) {
        gradeElement.classList.add("letterA");
        document.getElementById("gradeLetter").textContent = "A+";
    }
    else if (gradePercentage >= 93) {
        gradeElement.classList.add("letterA");
        document.getElementById("gradeLetter").textContent = "A";
    }
    else if (gradePercentage >= 90) {
        gradeElement.classList.add("letterA");
        document.getElementById("gradeLetter").textContent = "A-";
    }
    else if (gradePercentage >= 87) {
        gradeElement.classList.add("letterB");
        document.getElementById("gradeLetter").textContent = "B+";
    }
    else if (gradePercentage >= 83) {
        gradeElement.classList.add("letterB");
        document.getElementById("gradeLetter").textContent = "B";
    }
    else if (gradePercentage >= 80) {
        gradeElement.classList.add("letterB");
        document.getElementById("gradeLetter").textContent = "B-";
    }
    else if (gradePercentage >= 77) {
        gradeElement.classList.add("letterC");
        document.getElementById("gradeLetter").textContent = "C+";
    }
    else if (gradePercentage >= 73) {
        gradeElement.classList.add("letterC");
        document.getElementById("gradeLetter").textContent = "C";
    }
    else if (gradePercentage >= 70) {
        gradeElement.classList.add("letterC");
        document.getElementById("gradeLetter").textContent = "C-";
    }
    else if (gradePercentage >= 67) {
        gradeElement.classList.add("letterD");
        document.getElementById("gradeLetter").textContent = "D+";
    }
    else if (gradePercentage >= 63) {
        gradeElement.classList.add("letterD");
        document.getElementById("gradeLetter").textContent = "D";
    }
    else if (gradePercentage >= 60) {
        gradeElement.classList.add("letterD");
        document.getElementById("gradeLetter").textContent = "D-";
    }
    else if (gradePercentage || gradePercentage === 0) {
        gradeElement.classList.add("letterF");
        document.getElementById("gradeLetter").textContent = "F";
    }
    else {
        document.getElementById("gradeLetter").textContent = "";
    }
}