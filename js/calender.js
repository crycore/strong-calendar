myTbl = new Array( "���j��", "���j��", "�Ηj��", "���j��", "�ؗj��", "���j��", "�y�j��" );
myD = new Date();
myYear = myD.getYear();
myMonth = myD.getMonth() + 1;
myDate = myD.getDay();
myDay = myD.getDay();

myMess1 = myYear + "�N" + myMonth + "��" + myDate + "��";
myMess2 = myTbl[myDay];



document.write( myMess1 );
document.write( myMess2 );