<html>
<head>
<title> Zadanie 82</title>
<script language="JavaScript">
function pushbutton() {
alert("Czesc !");}
</script>
</head>
<body>
Ostatnio zmodyfikowany
<script language="LiveScript">
document.write(document.lastModified,"<br>")
</script>
<form>
<input type="button" name="Button1" value="Naciśnij mnie" onclick="pushbutton()">
</form>
<script language="JavaScript">
dzis = new Date()
document.write("<br>Aktualny czas : ",dzis.getHours(),":",dzis.getMinutes())
document.write("<br>Aktualna data : ",dzis.getMonth()+1,",",dzis.getDate(),",",dzis.getFullYear());
</script>
</body>
</html>