function calculateCGPA() {
    let a=[];
    let b=[];
    let c=[];
    let cgpa=0;
    parseFloat(cgpa);
    var sum=0;
    parseInt(sum);
    for(i=0;i<8;i++)
    {
        a[i]=0;
        b[i]=0;
    }
    a[0]=document.forms["cgpaForm"]["s1c"].value;
    b[0]=document.forms["cgpaForm"]["s1g"].value.toUpperCase();
    a[1]=document.forms["cgpaForm"]["s2c"].value;
    b[1]=document.forms["cgpaForm"]["s2g"].value.toUpperCase();
    a[2]=document.forms["cgpaForm"]["s3c"].value;
    b[2]=document.forms["cgpaForm"]["s3g"].value.toUpperCase();
    a[3]=document.forms["cgpaForm"]["s4c"].value;
    b[3]=document.forms["cgpaForm"]["s4g"].value.toUpperCase();
    a[4]=document.forms["cgpaForm"]["s5c"].value;
    b[4]=document.forms["cgpaForm"]["s5g"].value.toUpperCase();
    a[5]=document.forms["cgpaForm"]["s6c"].value;
    b[5]=document.forms["cgpaForm"]["s6g"].value.toUpperCase();
    a[6]=document.forms["cgpaForm"]["s7c"].value;
    b[6]=document.forms["cgpaForm"]["s7g"].value.toUpperCase();
    a[7]=document.forms["cgpaForm"]["s8c"].value;
    b[7]=document.forms["cgpaForm"]["s8g"].value.toUpperCase();
    for(i=0;i<8;i++)
    {
        let x=0;
        let y=0;
        if(b[i]=='S')
        {
            x=10;
        }
        if(b[i]=='A')
        {
            x=9;
        }
        if(b[i]=='B')
        {
            x=8;
        }
        if(b[i]=='C')
        {
            x=7;
        }
        if(b[i]=='D')
        {
            x=6;
        }
        if(b[i]=='E')
        {
            x=5;
        }
        if(b[i]=='F')
        {
            x=0;
        }
        cgpa=cgpa+(a[i]*parseFloat(x));
    }
    for(i=0;i<8;i++)
    {
        let p=1;
        sum=sum+(a[i]*parseFloat(p));
    }
    document.getElementById("result").innerHTML="CGPA = "+cgpa/sum;
}
