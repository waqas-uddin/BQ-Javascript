// TASK 1
// var Z_Percentage = 0.025
// var User_Input = +prompt("Enter your net worth on which Zakat is applicable: ")
// var Result = Z_Percentage*User_Input

// alert("Your Zakat Value Is : " + Result)


// TASK 2
// var f_members = +prompt("Enter your total number of family members : ")
// var f_method = +prompt("Enter your method of Fitrah: \n 1)Gandum 250rs \n 2)Jau  = 450rs \n 3)Khajoor = 2100rs \n 4)Kishmish  = 2800rs ")
// var fitrah 

// if(f_method==1){
//     fitrah = f_members*250
//     alert("Your total fitrah is : " + fitrah)
// }
// else if(f_method==2){
//     fitrah = f_members*450
//     alert("Your total fitrah is : "+ fitrah)
// }
// else if(f_method==3){
//     fitrah = f_members*2100
//     alert("Your total fitrah is : "+ fitrah)
// }
// else if(f_method==4){
//     fitrah = f_members*2800
//     alert("Your total fitrah is : "+ fitrah)
// }
// else{
//     alert("Error! Wrong value entered.")
// }

// TASK 3

// var s_number = 7 
// var guess = prompt("Enter a guess for the secret number : ")

// if(s_number == guess){
//     alert("Congragulations! You guessed it right. ")
// }
// else if(guess > s_number){
//     alert("Your guess is high.\n Make your guess again.")
// }
// else if(guess < s_number){
//     alert("Your guess is low.\n Make your guess again.")
// }

// TASK 4
// var Name = prompt("Enter your name : ")
// var f_letter = Name.slice(0,1)
// var e_name = Name.slice(1,Name.length)
// console.log(f_letter.toUpperCase() + e_name)
// console.log(Name.toUpperCase())

// TASK 5

// var C_number = []
// var C_names = []

// for(var i = 0 ; i <= 3 ; i++){
//     C_names.push(prompt("Enter a Contact Name : "))
//     C_number.push(prompt("Enter a Contact Number : "))
// }
// for(var i = 0; i < 3; i++){
//     console.log(C_names[i].toUpperCase())
//     console.log(C_number[i])
// }


// TASK 6

// var arr = ["Burger","Sandwich","Roll","Tikka"]
// console.log(arr)
// var abc = +prompt("Enter the position of the product you want to remove : ")

// if(abc > arr.length-1 || abc < 0){
//     alert("Error! Entered position isn't possible.")
// }
// else{
//     var abb = arr.splice(abc,1)
//     console.log(abb)
//     console.log(arr)
    
// }

// TASK 7
// var nationality = prompt("Enter your Nationality : ")
// var age = +prompt("Enter your Age : ")
// var gender = prompt("Enter your Gender : ") 

// if(nationality.toLowerCase() == "indian" || nationality.toLowerCase() == "pakistani"){
//     if(gender.toLowerCase() == "male"){
//         if(age >= 18){
//             console.log("You are eligible to Vote.")
//         }
//         else{
//             console.log("You are not eligible to Vote. ")
//         }
//     }
//     else if(gender.toLowerCase() == "female" && age >= 18){
//         var m_status = prompt("Are you married ? ")
//         if(m_status.toLowerCase() == "yes"){
//             console.log("You are eligible to Vote. ")
//         }
//         else if(m_status.toLowerCase() == "no"){
//             console.log("You are not eligible to Vote. ")
//         }
//         else{
//             alert("Wrong option entered.")
//         }
//     }
//     else{
//         console.log("You are not eligible to Vote. ")
//     }
// }
// else{
//     console.log("You are not eligible to Vote. ")
// }

// TASK 8
// var arr = ["Babar Azam","Mohammad Rizwan","Fakhar Zaman","Saim Ayub","Iftikhar Ahmed","Shadab Khan","Faheem Ashraf","Imad Wasim","Shaheen Afridi","Haris Rauf","Ihsanullah","Shan Masood","Mohammad Haris","Naseem Shah","Zaman Khan"]
// console.log("The Squad for World Cup is : ")
// for(var i = 0 ; i <= arr.length-1 ; i++){
//     console.log(arr[i])
// }
// var arr1 = arr.splice(0,11)
// console.log("The Squad for tomorrow's match is : ")
// for(var i = 0 ; i <= arr1.length-1 ; i++){
//     console.log(arr1[i])
// }
