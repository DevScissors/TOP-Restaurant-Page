const contentDiv = document.querySelector("#content");

export default function contact() {
  const contactPageWrapperDiv = document.createElement("div");
  const contactPageDiv = document.createElement("div");
  const contactPageTitle = document.createElement("h4");
  const contactPhoneWrapperDiv = document.createElement("div");
  const contactPhoneTitle = document.createElement("p");
  const contactPhone = document.createElement("p");
  const contactAddressWrapperDiv = document.createElement("div");
  const contactAddressTitle = document.createElement("p");
  const contactAddressInfoWrapper = document.createElement("div");
  const contactAddressStreet = document.createElement("p");
  const contactAddressCity = document.createElement("p");
  const contactAddressZip = document.createElement("p");
  const contactEmailWrapperDiv = document.createElement("div");
  const contactEmailTitle = document.createElement("p");
  const contactEmail = document.createElement("p");

  contactPageWrapperDiv.classList.add("contact-page-wrapper");
  contactPageDiv.classList.add("contact-page-content");
  contactPageTitle.classList.add("contact-page-title");
  contactPhoneWrapperDiv.classList.add("phone-wrapper", "contact-info-wrapper");
  contactPhoneTitle.classList.add("phone-title", "contact-title");
  contactPhone.classList.add("phone-number");
  contactAddressTitle.classList.add("address-title", "contact-title");
  contactAddressWrapperDiv.classList.add(
    "address-wrapper",
    "contact-info-wrapper",
  );
  contactAddressInfoWrapper.classList.add("adress-info-wrapper");
  contactAddressStreet.classList.add("address-street");
  contactAddressCity.classList.add("address-city");
  contactAddressZip.classList.add("address-zip");
  contactEmailWrapperDiv.classList.add("email-wrapper", "contact-info-wrapper");
  contactEmailTitle.classList.add("email-title", "contact-title");
  contactEmail.classList.add("email-address");

  contactPageTitle.textContent = "Contact Us";
  contactPhoneTitle.textContent = "Phone:";
  contactPhone.textContent = "123-345-1452";
  contactAddressTitle.textContent = "Address:";
  contactAddressStreet.textContent = "123 Rodeo Dr.";
  contactAddressCity.textContent = "Beverly Hills, CA";
  contactAddressZip.textContent = "90210";
  contactEmailTitle.textContent = "Email:";
  contactEmail.textContent = "contact@miglioreitaliano.com";

  contactPageWrapperDiv.append(contactPageTitle, contactPageDiv);

  contactPhoneWrapperDiv.append(contactPhoneTitle, contactPhone);

  contactAddressInfoWrapper.append(
    contactAddressStreet,
    contactAddressCity,
    contactAddressZip,
  );

  contactAddressWrapperDiv.append(
    contactAddressTitle,
    contactAddressInfoWrapper,
  );

  contactEmailWrapperDiv.append(contactEmailTitle, contactEmail);

  contactPageDiv.append(
    contactPhoneWrapperDiv,
    contactAddressWrapperDiv,
    contactEmailWrapperDiv,
  );

  contentDiv.appendChild(contactPageWrapperDiv);
}
