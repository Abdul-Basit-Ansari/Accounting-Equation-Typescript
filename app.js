var activeAssests = function () {
    var assestsBox = document.getElementById("assestsBox");
    assestsBox.style.display = "flex";
    var revenueBox = document.getElementById("revenueBox");
    revenueBox.style.display = "none";
};
var activeRevenue = function () {
    var revenueBox = document.getElementById("revenueBox");
    revenueBox.style.display = "flex";
    var assestsBox = document.getElementById("assestsBox");
    assestsBox.style.display = "none";
};
var resAssestData = function () {
    var asse = document.getElementById("assests");
    var ass = Number(asse.value);
    var liae = document.getElementById("liability");
    var lia = Number(liae.value);
    var cape = document.getElementById("capital");
    var cap = Number(cape.value);
    var res = document.getElementById("res");
    var ans;
    res.innerHTML = "";
    if ((!ass && !lia) || (!ass && !cap) || (!lia && !ass) || (!lia && !cap) || (!cap && !ass) || (!cap && !lia)) {
        res.innerHTML = "Minimun 2 Fields Values Must Required .";
    }
    if (ass && lia && !cap) {
        ans = Number(ass - lia);
        res.innerHTML = "Assests = Liability  + Capital <hr>Capital = Assests - Liability <br> Capital =  ".concat(ass, " - ").concat(lia, "<br>Capital = ").concat(ans, "  ");
    }
    if (ass && cap && !lia) {
        ans = Number(ass - cap);
        res.innerHTML = "Assests = Liability + Capital <hr>Liability = Assests - Capital <br> Liability =  ".concat(ass, " - ").concat(cap, "<br>Liability = ").concat(ans, "  ");
    }
    if (lia && cap && !ass) {
        ans = Number(lia + cap);
        res.innerHTML = "Assests = Liability + Capital <hr>Assests =  ".concat(lia, " + ").concat(cap, "<br>Assests = ").concat(ans, "  ");
    }
};
var resRevenueData = function () {
    var reve = document.getElementById("revenue");
    var rev = Number(reve.value);
    var expe = document.getElementById("expense");
    var exp = Number(expe.value);
    var pole = document.getElementById("profitLoss");
    var pol = Number(pole.value);
    var res = document.getElementById("res");
    var ans;
    res.innerHTML = "";
    if ((!rev && !exp) || (!rev && !pol) || (!exp && !rev) || (!exp && !pol) || (!pol && !rev) || (!pol && !exp)) {
        res.innerHTML = "Minimun 2 Fields Values Must Required .";
    }
    if (rev && exp && !pol) {
        ans = Number(rev - exp);
        var checkPol = "";
        if (ans >= 0) {
            checkPol = "Profit";
        }
        if (ans < 0) {
            checkPol = "Loss";
        }
        res.innerHTML = "Revenue + Expense = Profit / Loss <hr>".concat(rev, " + ").concat(exp, " = Profit / Loss <br>").concat(checkPol, " = ").concat(ans, "  ");
    }
    if (rev && pol && !exp) {
        ans = Number(rev - pol);
        res.innerHTML = "Revenue + Expense = Profit / Loss <hr> Revenue - Profit / Loss = Expense <br> ".concat(rev, " - ").concat(pol, " = Expense <br>Expense = ").concat(ans, "  ");
    }
    if (exp && pol && !rev) {
        ans = Number(pol + exp);
        res.innerHTML = "Revenue + Expense = Profit / Loss <hr> Revenue = Profit / Loss + Expense <br> Revenue = ".concat(pol, " + ").concat(exp, " <br>Revnue = ").concat(ans, "  ");
    }
};
