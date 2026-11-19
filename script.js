const page = document.createElement("main");
page.classList.add("survey-card");

document.body.append(page);

const title = document.createElement("h1");
title.textContent = "Survey Pengalaman Website";
page.append(title);

const description = document.createElement("p");
description.textContent = "Silakan isi survey singkat berikut.";
page.append(description);

const form = document.createElement("form");
page.append(form);

const nameLabel = document.createElement("label");
nameLabel.textContent = "Nama";
form.append(nameLabel);

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "Masukkan nama");
nameLabel.append(nameInput);

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
form.append(emailLabel);

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("placeholder", "Masukkan email");
emailLabel.append(emailInput);

const ratingLabel = document.createElement("label");
ratingLabel.textContent = "Bagaimana pengalaman Anda?";
form.append(ratingLabel);

const ratingSelect = document.createElement("select");
ratingSelect.setAttribute("name", "rating");
ratingLabel.append(ratingSelect);

const goodOption = document.createElement("option");
goodOption.textContent = "Baik";
goodOption.setAttribute("value", "baik");
ratingSelect.append(goodOption);

const averageOption = document.createElement("option");
averageOption.textContent = "Cukup";
averageOption.setAttribute("value", "cukup");
ratingSelect.append(averageOption);

const badOption = document.createElement("option");
badOption.textContent = "Kurang";
badOption.setAttribute("value", "kurang");
ratingSelect.append(badOption);

const feedbackLabel = document.createElement("label");
feedbackLabel.textContent = "Saran dan masukan";
form.append(feedbackLabel);

const feedbackInput = document.createElement("textarea");
feedbackInput.setAttribute("name", "feedback");
feedbackInput.setAttribute("placeholder", "Tulis saran Anda");
feedbackLabel.append(feedbackInput);

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Kirim Survey";
form.append(submitButton);
