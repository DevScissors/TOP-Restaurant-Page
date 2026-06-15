const contentDiv = document.querySelector("#content");

export default function contact() {
  const contactPageWrapperDiv = document.createElement("div");
  const contactPageDiv = document.createElement("div");
  const contactPageTitle = document.createElement("p");
  const contactPhoneTitle = document.createElement("p");
  const contactPagePhone = document.createElement("p");
  const contactAddressTitle = document.createElement("p");
  const contactAddressStreet = document.createElement("p");
  const contactAddressCity = document.createElement("p");
  const contactAddressZip = document.createElement("p");
  const contactEmailTitle = document.createElement("p");
  const contactEmail = document.createElement("p");

  contactPageWrapperDiv.classList.add("contact-page-wrapper");
  contactPageDiv.classList.add("contact-page-content");
  contactPageTitle.classList.add("contact-page-title");
  contactPhoneTitle.classList.add("phone-title", "contact-title");
  contactPagePhone.classList.add("phone-number");
  contactAddressTitle.classList.add("address-title", "contact-title");
  contactAddressStreet.classList.add("address-street");
  contactAddressCity.classList.add("address-city");
  contactAddressZip.classList.add("address-zip");
  contactEmailTitle.classList.add("email-title", "contact-title");
  contactEmail.classList.add("email-address");

  contactPageTitle.textContent = "Contact Us";
  contactPhoneTitle.textContent = "Phone:";
  contactPagePhone.textContent = "123-345-1452";
  contactAddressTitle.textContent = "Address:";
  contactAddressStreet.textContent = "123 Rodeo Dr.";
  contactAddressCity.textContent = "Beverly Hills, CA";
  contactAddressZip.textContent = "90210";
  contactEmailTitle.textContent = "Email:";
  contactEmail.textContent = "contact@miglioreitaliano.com";

  contactPageWrapperDiv.appendChild(contactPageDiv);

  contactPageDiv.append(
    contactPageTitle,
    contactPhoneTitle,
    contactPagePhone,
    contactAddressTitle,
    contactAddressStreet,
    contactAddressCity,
    contactAddressZip,
    contactEmailTitle,
    contactEmail,
  );

  contentDiv.appendChild(contactPageWrapperDiv);
}
