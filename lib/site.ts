export const site = {
  name: "MOHOVERI Hat Atelier",
  shortName: "Mohoveri",
  phoneDisplay: "+52 642 116 7817",
  phoneHref: "tel:+526421167817",
  whatsappNumber: "5216421167817",
  instagram: "https://www.instagram.com/mohoverihatatelier/",
  facebook: "https://www.facebook.com/mohoverihatbar",
}

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
