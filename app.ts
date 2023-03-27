const activeAssests = () =>{
    let assestsBox = document.getElementById("assestsBox")!
    assestsBox.style.display ="flex"
    let revenueBox = document.getElementById("revenueBox")!
    revenueBox.style.display ="none"
  }
  const activeRevenue = () =>{
    let revenueBox = document.getElementById("revenueBox")!
    revenueBox.style.display ="flex"
    let assestsBox = document.getElementById("assestsBox")!
    assestsBox.style.display ="none"
  }
  const resAssestData = ()=>{
    let asse = document.getElementById("assests")! as HTMLInputElement 
    let ass : number = Number(asse.value)
    let liae = document.getElementById("liability") ! as HTMLInputElement
    let lia : number = Number(liae.value)
    let cape = document.getElementById("capital")! as HTMLInputElement
    let cap : number = Number(cape.value)
    let res = document.getElementById("res")!
    let ans:number;
    res.innerHTML =""
    
    if ((!ass && !lia) || (!ass && !cap) || (!lia && !ass) ||(!lia && !cap) ||(!cap && !ass) || (!cap && !lia) ) {
      res.innerHTML = "Minimun 2 Fields Values Must Required ."
    }
    if (ass && lia && !cap  ) {
      ans = Number(ass - lia)
      res.innerHTML = `Assests = Liability  + Capital <hr>Capital = Assests - Liability <br> Capital =  ${ass} - ${lia}<br>Capital = ${ans}  `
    }
    if (ass && cap && !lia  ) {
      ans = Number(ass - cap) 
      res.innerHTML = `Assests = Liability + Capital <hr>Liability = Assests - Capital <br> Liability =  ${ass} - ${cap}<br>Liability = ${ans}  `
    }
    if (lia && cap && !ass  ) {
      ans = Number(lia + cap) 
      res.innerHTML = `Assests = Liability + Capital <hr>Assests =  ${lia} + ${cap}<br>Assests = ${ans}  `
    }
  }
  
  const resRevenueData = ()=>{
    let reve = document.getElementById("revenue")! as HTMLInputElement
    let rev:number = Number(reve.value) 
    let expe = document.getElementById("expense")! as HTMLInputElement
    let exp:number = Number(expe.value) 
    let pole = document.getElementById("profitLoss")! as HTMLInputElement
    let pol:number = Number(pole.value) 
    let res = document.getElementById("res")!
    let ans:number
    res.innerHTML =""
    
    if ((!rev && !exp) || (!rev && !pol) || (!exp && !rev) ||(!exp && !pol) ||(!pol && !rev) || (!pol && !exp) ) {
      res.innerHTML = "Minimun 2 Fields Values Must Required ."
    }
    if (rev && exp && !pol  ) {
      ans = Number(rev - exp)
      let checkPol:string="";
      if(ans >= 0){
        checkPol = "Profit"
      }
      if(ans < 0){
        checkPol = "Loss"
      }
      res.innerHTML = `Revenue + Expense = Profit / Loss <hr>${rev} + ${exp} = Profit / Loss <br>${checkPol} = ${ans}  `
    }
    if (rev && pol && !exp  ) {
      ans = Number(rev - pol)
      res.innerHTML = `Revenue + Expense = Profit / Loss <hr> Revenue - Profit / Loss = Expense <br> ${rev} - ${pol} = Expense <br>Expense = ${ans}  `
    }
    if (exp && pol && !rev  ) {
      ans = Number(pol + exp)
      res.innerHTML = `Revenue + Expense = Profit / Loss <hr> Revenue = Profit / Loss + Expense <br> Revenue = ${pol} + ${exp} <br>Revnue = ${ans}  `
    }
  }

  