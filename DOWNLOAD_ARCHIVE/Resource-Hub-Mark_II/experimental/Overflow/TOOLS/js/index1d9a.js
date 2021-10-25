var Site = {};

Site.account = {};
Site.account.loggedIn = function () {
  return !!window.session.email;
};
Site.account.getPlan = function () {
  return window.session.plan;
};
Site.account.login = function (email, password, cb) {
  email = email.replace(/^\s+/, "").replace(/\s+$/, "");
  if (email.length == 0) {
    cb(200, JSON.stringify({ success: false, error: "Empty email." }));
    return;
  }

  if (!/.+@.+\..+/.test(email)) {
    cb(200, JSON.stringify({ success: false, error: "Invalid email." }));
    return;
  }

  if (password.length == 0) {
    cb(200, JSON.stringify({ success: false, error: "Empty password." }));
    return;
  }

  Site.util.post(
    "/api/user/login",
    {
      email: email,
      password: password,
    },
    cb
  );
};
Site.account.register = function (email, password1, password2, cb) {
  email = email.replace(/^\s+/, "").replace(/\s+$/, "");
  if (email.length == 0) {
    cb(200, "Error: Empty email.");
    return;
  }

  if (!/.+@.+\..+/.test(email)) {
    cb(200, "Error: Invalid email.");
    return;
  }

  if (password1.length == 0) {
    cb(200, "Error: Empty password.");
    return;
  }
  if (password2.length == 0) {
    cb(200, "Error: Empty confirmation password.");
    return;
  }
  if (password1 != password2) {
    cb(200, "Error: Password don't match.");
    return;
  }

  Site.util.post(
    "/api/user/register",
    {
      email: email,
      password: password1,
      accountType: "broowserools",
    },
    cb
  );
};

Site.util = {};
Site.util.applyToAllElements = function (query, fn) {
  var elements = document.querySelectorAll(query);
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      fn(elements[i]);
    }
  }
};
Site.util.get = function (url, callback) {
  if (callback && typeof callback !== "function") {
    console.error("Callback is not a function");
    return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      callback && callback(this.status, this.responseText);
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
};
Site.util.post = function (url, parameters, callback) {
  if (parameters && typeof parameters !== "object") {
    console.error("Parameters is not an object");
    return;
  }
  if (callback && typeof callback !== "function") {
    console.error("Callback is not a function");
    return;
  }

  var query = [];
  if (!parameters) parameters = {};

  for (var p in parameters) {
    query.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
  }
  query = query.join("&");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      callback && callback(this.status, this.responseText);
    }
  };

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(query);
};

Site.pricing = {};
Site.pricing.lang = {
  PRICE_PER_MONTH: "month", // $x / month
  PRICE_PER_YEAR: "year", // $y / year
  TRY_FOR_FREE: "Try for free!", // free plan button text
  SIGN_UP_NOW: "Sign up now!", // if user is not logged in, show this text at paid plan buttons
  PLAN_UPGRADE: "Sign up now!", // if user is logged in, show this text at paid plans greater than current plan
  PLAN_IS_CURRENT: "You have this plan!", // if user is logged in and has this plan
  PLAN_NOT_NEEDED: "Upgrade not needed", // if user is logged in and has a better plan

  SIGN_IN_ACTION: "Sign in",
  SIGNING_IN_ACTION: "Signing in...",
  REGISTER_ACTION: "Create account",
  REGISTERING_ACTION: "Creating account...",
  ORDER_REGULAR_SUBTITLE: "ordering for {0} per {1}",
  ORDER_MULTIUSER_SUBTITLE: "ordering for {0} users",
  ORDER_MULTIUSER_USERS: "{0} users",
  GENERIC_SERVER_ERROR: "Server error. Please try again.",
  JSON_LOGIN_PARSE_ERROR: "Failed parsing JSON login response from the server.",
  START_USING_broowserools: "Start using broowserools",
  COUPON_APPLIED: "Sweet! You get {0}!",
};
Site.pricing.updateAll = function () {
  var container = document.querySelector("section.plans");
  var plans = container.querySelectorAll(".plan");

  for (var i = 0; i < plans.length; i++) {
    Site.pricing.updatePlan(plans[i]);
  }
};
Site.pricing.hideCouponInputForm = function (plan) {
  var radio = plan.querySelector(".plan-coupon-show");
  radio.checked = false;
};
Site.pricing.hideCouponMessage = function (plan) {
  var element = plan.querySelector(".scroll-pay .plan-payment-coupon");
  element.classList.remove("error");
  element.classList.remove("success");
  element.classList.remove("extended");
};
Site.pricing.showCouponError = function (plan, message) {
  Site.pricing.hideCouponMessage(plan);

  var element = plan.querySelector(".scroll-pay .plan-payment-coupon");
  element.classList.add("extended");
  element.classList.add("error");

  var text = element.querySelector(".plan-coupon-info span");
  text.textContent = message;
};
Site.pricing.showCouponSuccess = function (plan, message) {
  Site.pricing.hideCouponMessage(plan);

  var element = plan.querySelector(".scroll-pay .plan-payment-coupon");
  element.classList.add("extended");
  element.classList.add("success");

  var text = element.querySelector(".plan-coupon-info span");
  text.textContent = message;
};
Site.pricing.applyCouponCode = function (plan, coupon, cb) {
  coupon = coupon.replace(/^\s+/, "").replace(/\s+$/, "");
  coupon = coupon.toLowerCase();
  if (coupon.length == 0) {
    cb(false, "Empty coupon.");
    return;
  }
  Site.util.post(
    "/api/stripe/discount",
    {
      code: coupon,
    },
    function (status, response) {
      if (status != 200) {
        cb(false, Site.pricing.lang.GENERIC_SERVER_ERROR);
        return;
      }
      try {
        var discount = JSON.parse(response);
        if (discount.success) {
          cb(true, discount);
        } else {
          cb(false, discount.error);
        }
      } catch (e) {
        cb(false, Site.pricing.lang.GENERIC_SERVER_ERROR);
      }
    }
  );
};
Site.pricing.revokeCouponCode = function () {
  var container = document.querySelector("section.plans");
  var paidPlans = ["developer", "team"].forEach(function (planName) {
    var plan = container.querySelector(".plan.plan-" + planName);
    plan.removeAttribute("data-discount");
    plan.removeAttribute("data-discount-stripe-code");
  });
};

Site.pricing.showPaymentError = function (plan, message) {
  var element = plan.querySelector(".scroll-pay .plan-generic-error");
  return Site.pricing.showGenericError(plan, element, message);
};
Site.pricing.showLoginError = function (plan, message) {
  var element = plan.querySelector(
    ".scroll-auth .auth-login .plan-generic-error"
  );
  return Site.pricing.showGenericError(plan, element, message);
};
Site.pricing.showRegisterError = function (plan, message) {
  var element = plan.querySelector(
    ".scroll-auth .auth-register .plan-generic-error"
  );
  return Site.pricing.showGenericError(plan, element, message);
};
Site.pricing.hidePaymentError = function (plan) {
  var element = plan.querySelector(".scroll-pay .plan-generic-error");
  return Site.pricing.hideGenericError(plan, element);
};
Site.pricing.hideLoginError = function (plan) {
  var element = plan.querySelector(
    ".scroll-auth .auth-login .plan-generic-error"
  );
  return Site.pricing.hideGenericError(plan, element);
};
Site.pricing.hideRegisterError = function (plan) {
  var element = plan.querySelector(
    ".scroll-auth .auth-register .plan-generic-error"
  );
  return Site.pricing.hideGenericError(plan, element);
};

Site.pricing.showGenericError = function (plan, element, message) {
  // Since cards expand on click, this will avoid saving old non-expanded height
  if (!plan.classList.contains("selected")) {
    console.error("Can't show a generic error on a non-selected plan");
    return;
  }
  if (
    !document.querySelector("section.plans").classList.contains("has-selected")
  ) {
    console.error("Can't show a generic error with no selected plans");
    return;
  }

  Site.pricing.hidePaymentError(plan);

  plan.classList.add("generic-error");

  var error = element;
  var text = error.querySelector(".plan-generic-error-container span");
  text.textContent = message;

  var height = text.getBoundingClientRect().height + 12;
  error.style.height = height + "px";

  var heightBefore = parseInt(plan.getAttribute("data-original-height"));
  var planHeight = heightBefore || plan.getBoundingClientRect().height;

  if (!heightBefore) {
    plan.setAttribute("data-original-height", planHeight);
  }

  plan.style.height = planHeight + height + "px";
};
Site.pricing.hideGenericError = function (plan, element) {
  plan.classList.remove("generic-error");
  var error = element;
  error.style.height = 0;
  plan.style.height = "";
};
Site.pricing.setPlanState = function (plan, state) {
  var container = document.querySelector("section.plans");
  var authMode = plan.querySelector("input.plan-auth-mode");
  var backSide = plan.querySelector(".plan-side-back");

  plan.classList.remove("in-state-auth");
  plan.classList.remove("in-state-payment");
  plan.classList.remove("in-state-complete");

  backSide.classList.remove("state-auth");
  backSide.classList.remove("state-payment");
  backSide.classList.remove("state-complete");

  if (state == "login" || state == "register") {
    plan.classList.add("in-state-auth");
    backSide.classList.add("state-auth");
    authMode.checked = state == "login";
  } else if (state == "payment") {
    plan.classList.add("in-state-payment");
    backSide.classList.add("state-payment");
  } else if (state == "complete") {
    plan.classList.add("in-state-complete");
    backSide.classList.add("state-complete");
  } else if (state == "closed") {
    container.classList.remove("has-selected");
  }
};
Site.pricing.getPlanState = function (plan) {
  var authMode = plan.querySelector("input.plan-auth-mode");
  var backSide = plan.querySelector(".plan-side-back");
  var container = document.querySelector("section.plans");

  if (!container.classList.contains("has-selected") || !backSide || !authMode) {
    return "closed";
  } else if (backSide.classList.contains("state-payment")) {
    return "payment";
  } else if (backSide.classList.contains("state-complete")) {
    return "complete";
  } else if (authMode.checked) {
    return "login";
  } else {
    return "register";
  }
};
Site.pricing.getPlanPrice = function (plan) {
  var timespans = {
    monthly: Site.pricing.lang.PRICE_PER_MONTH,
    yearly: Site.pricing.lang.PRICE_PER_YEAR,
  };
  var multipliers = {
    monthly: 1,
    yearly: 12,
  };

  var billing = document
    .querySelector("section.plans")
    .getAttribute("data-billing");
  var timespan = timespans[billing];
  var multiplier = multipliers[billing];
  var discountMultiplier = 1;
  var discount = plan.getAttribute("data-discount");
  if (discount) {
    discountMultiplier = 1 - discount / 100;
  }

  if (plan.classList.contains("plan-free")) {
    return {
      total: 0,
      text: "$0",
      timespan: timespan,
    };
  } else {
    var backSide = plan.querySelector(".plan-side-back");
    var basePrice = parseInt(plan.getAttribute("data-base-price"));
    var planSettings = backSide.querySelector(".plan-title .plan-settings");

    if (!planSettings) {
      var total = basePrice * multiplier * discountMultiplier;
      if (discountMultiplier != 1) {
        total = total.toFixed(2);
      }
      return {
        total: total,
        text: "${0}".format(total),
        timespan: timespan,
      };
    } else {
      var teamUsers = parseInt(
        planSettings.querySelector(".plan-team-size-selector input:checked")
          .value
      );
      var deltaPerUser = parseInt(plan.getAttribute("data-price-delta"));

      var total =
        (basePrice + (teamUsers - 2) * deltaPerUser) *
        multiplier *
        discountMultiplier;
      if (discountMultiplier != 1) {
        total = total.toFixed(2);
      }
      var totalFront = basePrice * multiplier;
      return {
        total: total,
        text: "${0}+".format(total),
        textFront: "${0}+".format(totalFront),
        timespan: timespan,
      };
    }
  }
};
Site.pricing.updateFrontSide = function (plan) {
  var userPlan = Site.account.getPlan();
  var loggedIn = Site.account.loggedIn();
  var price = Site.pricing.getPlanPrice(plan);

  var priceOnFront = plan.querySelector(".plan-side-front .plan-billing");
  if (priceOnFront) {
    if (plan.classList.contains("plan-team")) {
      priceOnFront.querySelector(
        ".amount"
      ).textContent = price.textFront.replace("$", "");
    } else {
      priceOnFront.querySelector(".amount").textContent = price.text.replace(
        "$",
        ""
      );
    }
    priceOnFront.querySelector(".timespan").textContent = "/ " + price.timespan;
  }

  // Update the button on the front side
  var frontButton = plan.querySelector(".plan-side-front .plan-button button");
  frontButton.classList.remove("muted");
  frontButton.disabled = false;

  // Grey out the "Try for free" button if the user plan is not free
  // The button will still be clickable at all times.
  if (plan.classList.contains("plan-free")) {
    if (userPlan != "free") frontButton.classList.add("muted");
    frontButton.textContent = Site.pricing.lang.TRY_FOR_FREE;
  }

  // If the plan is not free and the user is not logged in,
  // the button will say "Sign up now!"
  else if (!loggedIn) {
    frontButton.textContent = Site.pricing.lang.SIGN_UP_NOW;
  }

  // If the plan is not free and the user is logged in,
  // show a message depending on users' plan.
  else if (plan.classList.contains("plan-developer")) {
    // Logged in on a free plan
    if (userPlan == "free") {
      frontButton.textContent = Site.pricing.lang.PLAN_UPGRADE;
    }

    // Logged in on a developer plan
    else if (userPlan == "developer") {
      frontButton.textContent = Site.pricing.lang.PLAN_IS_CURRENT;
      frontButton.disabled = true;
    }

    // Logged in on a team plan
    else if (userPlan == "team") {
      frontButton.textContent = Site.pricing.lang.PLAN_NOT_NEEDED;
      frontButton.disabled = true;
    }
  } else if (plan.classList.contains("plan-team")) {
    // Logged in on a free or developer plan
    if (userPlan != "team") {
      frontButton.textContent = Site.pricing.lang.PLAN_UPGRADE;
    }

    // Logged in on a team plan
    else {
      frontButton.textContent = Site.pricing.lang.PLAN_IS_CURRENT;
      frontButton.disabled = true;
    }
  }
};
Site.pricing.updatePlan = function (plan) {
  var backSide = plan.querySelector(".plan-side-back");
  var actionButton = backSide
    ? backSide.querySelector(".plan-button button span")
    : null;

  var price = Site.pricing.getPlanPrice(plan);
  var state = Site.pricing.getPlanState(plan);

  if (!plan.classList.contains("plan-free")) {
    Site.pricing.hidePaymentError(plan);
    Site.pricing.hideLoginError(plan);
    Site.pricing.hideRegisterError(plan);
  }

  if (state == "closed") {
    Site.pricing.updateFrontSide(plan);
  } else if (state == "login") {
    actionButton.textContent = Site.pricing.lang.SIGN_IN_ACTION;
    var input = backSide.querySelector(
      ".scroll-auth .auth-login form input[type=text]"
    );
    setTimeout(function () {
      input.focus();
    }, 501);
  } else if (state == "register") {
    actionButton.textContent = Site.pricing.lang.REGISTER_ACTION;
    var input = backSide.querySelector(
      ".scroll-auth .auth-register form input[type=text]"
    );
    setTimeout(function () {
      input.focus();
    }, 501);
  } else if (state == "complete") {
    actionButton.textContent = Site.pricing.lang.START_USING_broowserools;
  } else if (state == "payment") {
    var statusText = backSide.querySelector(".plan-price-scroll.payment");
    var planSettings = backSide.querySelector(".plan-title .plan-settings");
    var payButton = backSide.querySelector(".plan-button button span");
    var infoSize = backSide.querySelector(".plan-team-price-info-size");
    var infoPrice = backSide.querySelector(".plan-team-price-info-price");
    var infoPeriod = backSide.querySelector(".plan-team-price-info-period");

    if (!planSettings) {
      // If the plan is non-extendable (for 1 user)
      //
      statusText.textContent = Site.pricing.lang.ORDER_REGULAR_SUBTITLE.format(
        price.text,
        price.timespan
      );

      // Update PayPal subscription link to monthly/yearly
      //
      var container = document.querySelector("section.plans");
      var devPlanPayPalLink =
        "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MJNKSB2GRDBQC";
      if (container.getAttribute("data-billing") == "yearly") {
        devPlanPayPalLink =
          "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZY2UUNQAL8RV4";
      }
      var payPalLink = backSide.querySelector(".paypal-developer-plan");
      payPalLink.setAttribute("href", devPlanPayPalLink);
    } else {
      // If the plan is extendable, update the users count
      //
      var users = parseInt(
        planSettings.querySelector(".plan-team-size-selector input:checked")
          .value
      );
      var teamSize = planSettings.querySelector(".team-size-number");

      teamSize.textContent = Site.pricing.lang.ORDER_MULTIUSER_USERS.format(
        users
      );
      statusText.textContent = Site.pricing.lang.ORDER_MULTIUSER_SUBTITLE.format(
        users
      );
      infoSize.textContent = users;
      infoPrice.textContent = "$" + price.total;
      infoPeriod.textContent = " / " + price.timespan;

      // Update PayPal subscription link to monthly/yearly
      //
      var teamPayPalLinksMonthly = {
        2: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AXKYQ7MJSYGQU",
        3: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XE37C3RWLFMWL",
        4: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7YRAT3W986PSC",
        5: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZUK5K2B4BLVP2",
        6: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L532FYTENTLTQ",
        7: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TK4LKS2KWMFBY",
        8: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V42V8C7X4LNNW",
        9: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MXVPVZQE46FQQ",
        10: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PPSUQEHQ8XCSL",
      };
      var teamPayPalLinksYearly = {
        2: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y9ZQK9XQG6CJC",
        3: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UZKRGN5RCK46G",
        4: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3JLDL8UJZ9VBG",
        5: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6BMMFCSG26TS2",
        6: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MZD3XXWFSDXHA",
        7: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FRVRE47U3RJ28",
        8: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SBBHGDB4GZHMC",
        9: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R9WP3Q55EFUJS",
        10: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8MZQRN2DPUNFG",
      };

      var container = document.querySelector("section.plans");
      var teamPlanPayPalLink = teamPayPalLinksMonthly[users];
      if (container.getAttribute("data-billing") == "yearly") {
        teamPlanPayPalLink = teamPayPalLinksYearly[users];
      }

      var payPalLink = backSide.querySelector(".paypal-team-plan");
      payPalLink.setAttribute("href", teamPlanPayPalLink);
    }

    payButton.textContent = "Pay ${0}".format(price.total);

    var input = backSide.querySelector(".scroll-pay form input[type=text]");
    setTimeout(function () {
      input.focus();
    }, 501);
  }
};
Site.pricing.choosePlan = function (which) {
  var container = document.querySelector("section.plans");

  var selected = container.querySelectorAll(".plan.selected");
  for (var i = 0; i < selected.length; i++) {
    selected[i].classList.remove("selected");
  }

  var plan = container.querySelector(".plan.plan-" + which);
  if (!plan || which == "free") {
    throw "Site: Can't initialize plan \"" + which + '"';
  }

  var back = plan.querySelector(".plan-side-back");
  back.classList.remove("state-auth");
  back.classList.remove("state-payment");
  container.classList.remove("has-selected");

  if (Site.account.loggedIn()) {
    Site.pricing.setPlanState(plan, "payment");
  } else {
    Site.pricing.setPlanState(plan, "login");
  }

  plan.classList.add("selected");
  container.classList.add("has-selected");

  Site.pricing.updatePlan(plan);

  zenscroll.intoView(container);
};
Site.pricing.setBillingPeriod = function (period) {
  var container = document.querySelector("section.plans");
  var selector = container.querySelector(".pricing-period-selector");

  var monthly = selector.querySelector(".pricing-period-monthly");
  monthly.classList.remove("selected");
  var yearly = selector.querySelector(".pricing-period-yearly");
  yearly.classList.remove("selected");

  if (period == "monthly") {
    monthly.classList.add("selected");
  } else if (period == "yearly") {
    yearly.classList.add("selected");
  } else {
    console.error("Period", period, "is not supported.");
    return;
  }

  container.setAttribute("data-billing", period);
  Site.pricing.updateAll();
};
Site.pricing.getBack = function () {
  var container = document.querySelector("section.plans");
  var selected = container.querySelector(".plan.selected");
  Site.pricing.hidePaymentError(selected);
  Site.pricing.hideLoginError(selected);
  Site.pricing.hideRegisterError(selected);
  Site.pricing.hideCouponMessage(selected);
  Site.pricing.hideCouponInputForm(selected);
  Site.pricing.revokeCouponCode(selected);
  Site.pricing.setPlanState(selected, "closed");
  Site.pricing.updateAll();
};
Site.pricing.initializePlan = function (which) {
  var container = document.querySelector("section.plans");

  var plan = container.querySelector(".plan.plan-" + which);
  if (!plan) {
    throw "Site: Can't initialize plan \"" + which + '"';
  }

  var choose = plan.querySelector(".plan-side-front .plan-button");
  choose.addEventListener("click", function () {
    Site.pricing.choosePlan(which);
  });

  var backSide = plan.querySelector(".plan-side-back");
  var back = backSide.querySelector(".icon-back");
  back.addEventListener("click", function () {
    Site.pricing.getBack();
  });

  var actionButton = plan.querySelector(".plan-side-back .plan-button");
  var actionText = actionButton.querySelector("span");
  var authType = plan.querySelector("input.plan-auth-mode");

  authType.addEventListener("change", function () {
    Site.pricing.updatePlan(plan);
  });

  var couponButton = backSide.querySelector(
    ".plan-side-scroll.scroll-pay .plan-payment-coupon .icon-check"
  );
  couponButton.addEventListener("click", function () {
    if (couponButton.classList.contains("disabled")) return;

    couponButton.classList.remove("disabled");
    couponButton.classList.add("disabled");

    var coupon = backSide.querySelector(
      ".plan-side-scroll.scroll-pay .plan-payment-coupon .plan-coupon-code"
    ).value;

    Site.pricing.applyCouponCode(plan, coupon, function (isSuccess, data) {
      if (isSuccess) {
        var stripeCoupon = plan.querySelector('input[name="cc-coupon"]');
        stripeCoupon.value = data.stripe_code;
        Site.pricing.showCouponSuccess(
          plan,
          Site.pricing.lang.COUPON_APPLIED.format(data.description)
        );
        plan.setAttribute("data-discount", data.percent_off);
        plan.setAttribute("data-discount-stripe-code", data.stripe_code);
        Site.pricing.updatePlan(plan);
      } else {
        Site.pricing.showCouponError(plan, data);
      }
    });

    couponButton.classList.remove("disabled");
  });

  var submitsOnEnterForms = plan.querySelectorAll(".submits-on-enter");
  for (var i = 0; i < submitsOnEnterForms.length; i++) {
    var form = submitsOnEnterForms[i];
    var inputElements = form.querySelectorAll("input");
    for (var j = 0; j < inputElements.length; j++) {
      var inputElement = inputElements[j];
      inputElement.addEventListener("keypress", function (ev) {
        if (event.keyCode == 13) {
          ev.preventDefault();
          actionButton.click();
        }
      });
    }
  }

  actionButton.addEventListener("click", function () {
    // paying
    if (backSide.classList.contains("state-payment")) {
      function handlePayment() {
        var oldActionText = null;
        var buttonElement = actionButton.querySelector("button");

        if (buttonElement.disabled) {
          return;
        }

        function disablePaymentButton() {
          if (!buttonElement.disabled) {
            actionButton.setAttribute("disabled", "");
            buttonElement.disabled = true;
            oldActionText = actionText.textContent;
            actionText.textContent = "Processing...";
          }
        }

        function enablePaymentButton() {
          if (buttonElement.disabled) {
            actionButton.removeAttribute("disabled");
            buttonElement.disabled = false;
            actionText.textContent = oldActionText;
          }
        }

        disablePaymentButton();

        var form = plan.querySelector(".scroll-pay form");
        Stripe.card.createToken(form, stripeResponseHandler);

        function stripeResponseHandler(status, response) {
          if (response.error) {
            Site.pricing.showPaymentError(plan, response.error.message);
            enablePaymentButton();
            return;
          }

          // creating a payment token succeeded, verify it through backend
          var token = response.id;

          var interval = container.getAttribute("data-billing");
          var backendUrl = "/api/stripe/buy/devplan";
          if (which == "team") {
            var planSettings = backSide.querySelector(
              ".plan-title .plan-settings"
            );
            var teamSize = parseInt(
              planSettings.querySelector(
                ".plan-team-size-selector input:checked"
              ).value
            );
            backendUrl = "/api/stripe/buy/teamplan/" + teamSize;
          }
          var coupon = plan.getAttribute("data-discount-stripe-code");

          $.post(
            backendUrl,
            {
              stripeToken: token,
              coupon: coupon,
              interval: interval,
            },
            function (data) {
              if (/^error/i.test(data)) {
                Site.pricing.showPaymentError(plan, data);
                enablePaymentButton();
              } else {
                window.session.plan = "developer";
                if (which == "team") {
                  window.session.plan = "team";
                }

                /** TODO: move away from jquery here!! **/
                // make locked browsers available
                //
                $("#unlock").hide();
                $("#versions input").attr("disabled", false);
                $('#run input[type="button"]').attr("disabled", false);
                /** TODO: move away from jquery here!! **/
                enablePaymentButton();

                Site.pricing.setPlanState(plan, "complete");
                Site.pricing.updatePlan(plan);
              }
            }
          );
        }
      }
      handlePayment();
    }

    // using
    else if (backSide.classList.contains("state-complete")) {
      Site.pricing.scrollToBrowserSelection();
    }

    // logging in
    else if (authType.checked) {
      Site.pricing.hideLoginError(plan);
      actionText.textContent = Site.pricing.lang.SIGNING_IN_ACTION;

      var loginWrapper = backSide.querySelector(
        ".plan-side-scroll.scroll-auth .auth-login"
      );
      var email = loginWrapper.querySelector(".plan-auth-email").value;
      var password = loginWrapper.querySelector(".plan-auth-password").value;
      Site.account.login(email, password, function (status, response) {
        if (status != 200) {
          Site.pricing.showLoginError(
            plan,
            Site.pricing.lang.GENERIC_SERVER_ERROR
          );
          actionText.textContent = Site.pricing.lang.SIGN_IN_ACTION;
          return;
        }
        try {
          var json = JSON.parse(response);
          if (json.success) {
            window.session.email = email;
            window.session.plan = json.plan;

            var planWeight = {
              developer: 1,
              team: 2,
            };

            var chosenPlan = planWeight[which];
            var usersPlan = planWeight[json.plan];

            Site.pricing.hideLoginError(plan);

            if (usersPlan >= chosenPlan) {
              Site.pricing.getBack();
            } else {
              Site.pricing.setPlanState(plan, "payment");
            }

            Site.pricing.updatePlan(plan);
          } else {
            Site.pricing.showLoginError(plan, json.error);
            actionText.textContent = Site.pricing.lang.SIGN_IN_ACTION;
            return;
          }
        } catch (e) {
          Site.pricing.showLoginError(
            plan,
            Site.pricing.lang.JSON_LOGIN_PARSE_ERROR
          );
          actionText.textContent = Site.pricing.lang.SIGN_IN_ACTION;
          return;
        }
      });
    }

    // register
    else {
      Site.pricing.hideRegisterError(plan);
      actionText.textContent = Site.pricing.lang.REGISTERING_ACTION;

      var registerWrapper = backSide.querySelector(
        ".plan-side-scroll.scroll-auth .auth-register"
      );
      var email = registerWrapper.querySelector(".plan-auth-email").value;
      var password1 = registerWrapper.querySelector(".plan-auth-password")
        .value;
      var password2 = registerWrapper.querySelector(
        ".plan-auth-confirm-password"
      ).value;
      Site.account.register(
        email,
        password1,
        password2,
        function (status, response) {
          if (status != 200) {
            Site.pricing.showRegisterError(
              plan,
              Site.pricing.lang.GENERIC_SERVER_ERROR
            );
            actionText.textContent = Site.pricing.lang.REGISTER_ACTION;
            return;
          }
          if (/^error/i.test(response)) {
            Site.pricing.showRegisterError(plan, response);
            actionText.textContent = Site.pricing.lang.REGISTER_ACTION;
            return;
          } else {
            window.session.email = email;
            Site.pricing.hideRegisterError(plan);
            Site.pricing.setPlanState(plan, "payment");
            setTimeout(function () {
              Site.pricing.updatePlan(plan);
            }, 10);
          }
        }
      );
    }
  });

  var teamSelectors = backSide.querySelectorAll(
    ".plan-team-size-selector input[type=radio]"
  );
  var selector = null;
  for (var i = 0; i < teamSelectors.length; i++) {
    selector = teamSelectors[i];
    selector.addEventListener("change", function () {
      Site.pricing.updatePlan(plan);
    });
  }
};
Site.pricing.scrollToBrowserSelection = function () {
  zenscroll.toY(0, 250);
  var urlInput = document.querySelector("#url-run input");
  urlInput.focus();
  setTimeout(function () {
    urlInput.selectionStart = urlInput.selectionEnd = urlInput.value.length;
  }, 0);
};
Site.pricing.initialize = function () {
  var container = document.querySelector("section.plans");

  var tryForFree = container.querySelector(
    ".plan-free .plan-side-front .plan-button"
  );
  tryForFree.addEventListener("click", Site.pricing.scrollToBrowserSelection);
  var startUsingbroowserools = container.querySelector(
    ".plan-developer .scroll-complete-start-using-broowserools"
  );
  startUsingbroowserools.addEventListener(
    "click",
    Site.pricing.scrollToBrowserSelection
  );

  var paidPlans = ["developer", "team"];
  for (var i = 0; i < paidPlans.length; i++) {
    Site.pricing.initializePlan(paidPlans[i]);
  }

  var billMonthly = container.querySelector(
    ".pricing-period-selector > .pricing-period-monthly"
  );
  var billYearly = container.querySelector(
    ".pricing-period-selector > .pricing-period-yearly"
  );

  billMonthly.addEventListener("click", function () {
    Site.pricing.setBillingPeriod("monthly");
  });

  billYearly.addEventListener("click", function () {
    Site.pricing.setBillingPeriod("yearly");
  });

  Site.pricing.updateAll();
};

String.prototype.format = function () {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp("\\{" + i + "\\}", "gi");
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

$(function () {
  var allPlatforms = [
    {
      text: "Android 7.1 Nougat",
      icon: "images/os-icons/android-71.png",
    },
    {
      text: "Android 7.0 Nougat",
      icon: "images/os-icons/android-70.png",
    },
    {
      text: "Android 6.0 Marshmallow",
      icon: "images/os-icons/android-60.png",
    },
    {
      text: "Android 5.1 Lollipop",
      icon: "images/os-icons/android-51.png",
    },
    {
      text: "Android 5.0 Lollipop",
      icon: "images/os-icons/android-50.png",
    },
    {
      text: "Android 4.4 KitKat",
      icon: "images/os-icons/android-44.png",
    },
    {
      text: "Windows XP",
      icon: "images/os-icons/windows-xp.png",
    },
    {
      text: "Windows Vista",
      icon: "images/os-icons/windows-vista.png",
    },
    {
      text: "Windows 7",
      selected: true,
      icon: "images/os-icons/windows-7.png",
    },
    {
      text: "Windows 8",
      icon: "images/os-icons/windows-8.png",
    },
    {
      text: "Windows 8.1",
      icon: "images/os-icons/windows-81.png",
    },
    {
      text: "Windows 10",
      icon: "images/os-icons/windows-10.png",
    },
  ];

  var allBrowsers = [
    {
      text: "Internet Explorer",
      selected: true,
      icon: "images/browser-icons/ie.png",
    },
    {
      text: "Chrome",
      icon: "images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "images/browser-icons/safari.png",
    },
  ];

  var win10Browsers = [
    {
      text: "Edge",
      selected: true,
      icon: "images/browser-icons/edge.png",
    },
    {
      text: "Internet Explorer",
      icon: "images/browser-icons/ie.png",
    },
    {
      text: "Chrome",
      icon: "images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "images/browser-icons/safari.png",
    },
  ];

  var androidBrowsers = [
    {
      text: "Default Browser",
      icon: "images/browser-icons/android.png",
    },
  ];

  function range(start, end) {
    var ret = [];
    for (var i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret;
  }

  var browserVersions = {
    "android4.4": {
      browser: ["4.4"],
    },
    "android5.0": {
      browser: ["5.0"],
    },
    "android5.1": {
      browser: ["5.1"],
    },
    "android6.0": {
      browser: ["6.0"],
    },
    "android7.0": {
      browser: ["7.0"],
    },
    "android7.1": {
      browser: ["7.1"],
    },
    winxp: {
      ie: [6, 7, 8],
      chrome: ["canary"].concat(range(1, 49)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 49)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
    },
    winvista: {
      ie: [9],
      chrome: ["canary"].concat(range(1, 50)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
    },
    win7: {
      ie: [10, 11],
      chrome: ["canary"].concat(range(1, 81)).concat(range(83, 86)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 82)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12]
        .concat(range(15, 58))
        .concat([60, 62])
        .concat(range(63, 72)),
    },
    win8: {
      ie: [10],
      chrome: ["canary"].concat(range(30, 57)),
      firefox: ["nightly"].concat(range(30, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next"].concat(range(20, 44)),
    },
    "win8.1": {
      ie: [11],
      chrome: ["canary"].concat(range(30, 57)),
      firefox: ["nightly"].concat(range(30, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next"].concat(range(20, 44)),
    },
    win10: {
      edge: [38],
      ie: [11],
      chrome: ["canary"].concat(range(1, 56)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 51)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 43)),
    },
  };

  function updateBrowsersDropdown(browsers) {
    browserDropdown.update(browsers);
  }

  function updateVersionsDropdown(versions) {
    versionDropdown.update(versions);
  }

  var dropDownState = 0;

  var platformDropdown = new Dropdown({
    width: 200,
    height: 40,
    iconWidth: 32,
    iconHeight: 32,
    backgroundColor: "white",
    data: allPlatforms,
    onClick: function (newState) {
      if (newState == "visible") {
        dropDownState++;
        $("#five-secs").fadeOut("fast");
      } else {
        dropDownState--;
        if (dropDownState == 0) {
          $("#five-secs").fadeIn("fast");
        }
      }
    },
    callback: function (selected) {
      var platform_version = selected;
      platform_version = platformVersionToShortName(platform_version);

      var platform = "win";
      if (/android/i.test(selected)) {
        platform = "android";
        // for now add only android 6 default browser
        updateBrowsersDropdown(androidBrowsers);
        var browser = "browser";
      } else {
        var browser = $("#browser .dropdown-selected .text").text();
        browser = normalizeBrowserName(browser);
        if (platform_version == 10) {
          browser = "edge";
          updateBrowsersDropdown(win10Browsers);
        } else {
          browser = "ie";
          updateBrowsersDropdown(allBrowsers);
        }
      }

      var versions = browserVersions[platform + platform_version][
        browser
      ].slice();
      versions.reverse();
      updateVersionsDropdown(versions);

      if (session.plan == "free") {
        if (
          platform_version != "vista" &&
          platform_version != "7" &&
          platform_version != "android" &&
          platform_version != "7.1"
        ) {
          $("#url-run button").attr("disabled", true);
          if (/android/i.test(selected)) {
            $("#need-paid-plan").html(
              '<a href="/#pricing">Upgrade to a paid plan</a> to unlock Android!'
            );
          } else {
            $("#need-paid-plan").html(
              '<a href="/#pricing">Upgrade to a paid plan</a> to unlock ' +
                selected +
                "!"
            );
          }
          $("#need-paid-plan").fadeIn();
        } else {
          $("#need-paid-plan").fadeOut();
          $("#url-run button").attr("disabled", false);
        }
      }
    },
  });
  $("#platform").append(platformDropdown.create());

  var browserDropdown = new Dropdown({
    width: 170,
    height: 40,
    iconWidth: 32,
    iconHeight: 32,
    backgroundColor: "white",
    data: allBrowsers,
    onClick: function (newState) {
      if (newState == "visible") {
        dropDownState++;
        $("#five-secs").fadeOut("fast");
      } else {
        dropDownState--;
        if (dropDownState == 0) {
          $("#five-secs").fadeIn("fast");
        }
      }
    },
    callback: function (selected) {
      var browser = selected;
      browser = normalizeBrowserName(browser);

      var platform_version = $("#platform .dropdown-selected .text").text();

      var platform = "win";
      if (/android/i.test(platform_version)) {
        platform = "android";
        browser = "browser";
      }

      platform_version = platformVersionToShortName(platform_version);
      var versions = browserVersions[platform + platform_version][
        browser
      ].slice();
      versions.reverse();
      updateVersionsDropdown(versions);
    },
  });
  $("#browser").append(browserDropdown.create());

  // ie 11 on win7 is selected by default
  var ieVersions = browserVersions["win7"]["ie"].slice();
  ieVersions.reverse();
  var versionDropdown = new Dropdown({
    width: 90,
    height: 40,
    center: true,
    backgroundColor: "white",
    data: ieVersions,
    onClick: function (newState) {
      if (newState == "visible") {
        dropDownState++;
        $("#five-secs").fadeOut("fast");
      } else {
        dropDownState--;
        if (dropDownState == 0) {
          $("#five-secs").fadeIn("fast");
        }
      }
    },
  });
  $("#version").append(versionDropdown.create());

  function platformVersionToShortName(platform_version) {
    if (platform_version == "Windows XP") {
      platform_version = "xp";
    } else if (platform_version == "Windows Vista") {
      platform_version = "vista";
    } else if (platform_version == "Windows 7") {
      platform_version = "7";
    } else if (platform_version == "Windows 8") {
      platform_version = "8";
    } else if (platform_version == "Windows 8.1") {
      platform_version = "8.1";
    } else if (platform_version == "Windows 10") {
      platform_version = "10";
    } else if (platform_version == "Android 7.1 Nougat") {
      platform_version = "7.1";
    } else if (platform_version == "Android 7.0 Nougat") {
      platform_version = "7.0";
    } else if (platform_version == "Android 6.0 Marshmallow") {
      platform_version = "6.0";
    } else if (platform_version == "Android 5.1 Lollipop") {
      platform_version = "5.1";
    } else if (platform_version == "Android 5.0 Lollipop") {
      platform_version = "5.0";
    } else if (platform_version == "Android 4.4 KitKat") {
      platform_version = "4.4";
    }
    return platform_version;
  }

  function normalizeBrowserName(browser) {
    if (browser == "Internet Explorer") {
      browser = "ie";
    } else {
      browser = browser.toLowerCase();
    }
    return browser;
  }

  // make run work
  $("#url-run button").click(function () {
    var platform_name = "win";
    var platform_version = $("#platform .dropdown-selected .text").text();
    if (/android/i.test(platform_version)) {
      platform_name = "android";
    }
    platform_version = platformVersionToShortName(platform_version);

    var browser = $("#browser .dropdown-selected .text").text();
    browser = normalizeBrowserName(browser);

    var version = $("#version .dropdown-selected .text").text();
    var url = $("#url-run input").val();

    if (platform_name == "android") {
      window.location.href =
        "/browse/" +
        platform_name +
        "/" +
        platform_version +
        "/" +
        encodeURIComponent(url);
    } else {
      window.location.href =
        "/browse/" +
        platform_name +
        "/" +
        platform_version +
        "/" +
        browser +
        "/" +
        version +
        "/" +
        encodeURIComponent(url);
    }
  });

  // Make enter work in URL input field
  $("#url-run input").keypress(function (ev) {
    if (ev.which == 13) {
      $("#url-run button").click();
    }
  });

  // make testimonials work
  //
  $(".testimonial-pic").click(function (ev) {
    ev.preventDefault();

    var count = $("#testimonial>div").length;
    for (var i = 0; i < count; i++) {
      $("#testimonial-" + i).hide();
    }

    var idx = $(".testimonial-pic").index(this);
    $("#testimonial-" + idx).show();

    $(".testimonial-pic img").removeClass("selected");
    $(this).find("img").addClass("selected");
  });

  Site.pricing.initialize();
});
