var exhibitions = [];

exhibitions[0] = {
    startDate: new Date("2023-11-17"),
    Name: "Живопис", 
    Place: "Галерея мистецтв", 
    Organisator: "Мистецька асоціація"
};
exhibitions[1] = {
    startDate: new Date("2023-11-15"),
    Name: "Фотографія", 
    Place: "Музей сучасного мистецтва", 
    Organisator: "Фотошкола"
};
exhibitions[2] = {
    startDate: new Date("2024-02-16"),
    Name: "Скульптура", 
    Place: "Виставковий центр", 
    Organisator: "Спільнота скульпторів"
};
exhibitions[3] = {
    startDate: new Date("2023-11-06"),
    Name: "Графіка", 
    Place: "Міська галерея"
};
exhibitions[4] = {
    startDate: new Date("2023-11-10"),
    Name: "Сучасне мистецтво", 
    Place: "Виставковий комплекс", 
    Organisator: "Мистецька група"
};

function calculateDays(startDate) {
    var currentDate = new Date();
    var daysToStart = Math.ceil((startDate - currentDate) / (1000 * 60 * 60 * 24));
    var exhibitionEndDate = new Date(startDate);
    exhibitionEndDate.setDate(startDate.getDate() + 7);
    var daysToEnd = Math.ceil((exhibitionEndDate - currentDate) / (1000 * 60 * 60 * 24));
    var daysFromEnd = Math.ceil((currentDate - exhibitionEndDate) / (1000 * 60 * 60 * 24)) - 1;
    return {
        daysToStart: daysToStart,
        daysToEnd: daysToEnd,
        daysFromEnd: daysFromEnd
    };
}

function exhibitionInfo(exhibition) {
    var daysInfo = calculateDays(exhibition.startDate);
    var exhibitionInfo = "<tr>";
    exhibitionInfo += "<td>" + exhibition.Name + "</td>";
    exhibitionInfo += "<td>" + exhibition.Place + "</td>";
    exhibitionInfo += "<td>" + (exhibition.Organisator || "Інформація відсутня") + "</td>";
    exhibitionInfo += (daysInfo.daysToStart > 0) ? "<td>" + daysInfo.daysToStart + "</td>" : (daysInfo.daysFromEnd>=0)? "<td>" + daysInfo.daysFromEnd + "</td>" :"<td>" + daysInfo.daysToEnd + "</td>";
    exhibitionInfo += "</tr>";

    return exhibitionInfo;
}
function displayInfo(){
    var exhibitionsInfo = document.getElementById("exhibitions-info");
    if (exhibitionsInfo.style.display === "block") {
        exhibitionsInfo.style.display = "none";
    } else {
        exhibitionsInfo.style.display = "block";
    }
    var pastExhibitionTable  = "<h2>Інформація про минулі виставки:</h2><table><tr><th>Назва виставки</th><th>Місце проведення</th><th>Організатор</th><th>Днів після закінчення</th></tr>";
    var futureExhibitionsTable = "<h2>Інформація про майбутні виставки:</h2><table><tr><th>Назва виставки</th><th>Місце проведення</th><th>Організатор</th><th>Днів до початку</th></tr>";
    var currentExhibitionsTable =  "<h2>Інформація про поточні виставки:</h2><table><tr><th>Назва виставки</th><th>Місце проведення</th><th>Організатор</th><th>Днів до закінчення</th></tr>";
    for (var i = 0; i < exhibitions.length; i++) {
        var exhibition = exhibitions[i];
        var daysInfo = calculateDays(exhibition.startDate);
        if (daysInfo.daysToStart > 0) {
            futureExhibitionsTable += exhibitionInfo(exhibition);
        } else if(daysInfo.daysFromEnd < 0){
            currentExhibitionsTable += exhibitionInfo(exhibition);
        }
        else {
            pastExhibitionTable += exhibitionInfo(exhibition);
        }
    }
    pastExhibitionTable += "</table>";
    futureExhibitionsTable += "</table>";
    currentExhibitionsTable += "</table>";
    var html = pastExhibitionTable + futureExhibitionsTable + currentExhibitionsTable;
    document.getElementById("exhibitions-info").innerHTML = html;
}