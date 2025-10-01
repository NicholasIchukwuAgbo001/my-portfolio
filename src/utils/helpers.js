export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, "+$1 $2 $3 $4");
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
