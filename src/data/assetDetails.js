/** Sample marketplace asset detail records (slug → content) */

const IMG_FANTASY_MAIN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFLLRW1OqppRrA7Q66_XD_yfOJ-QVkbTzs5UdMt0KWKLu_i-vEZV9rsUye6BxB6hXNw9dwx8gvpvre2g0rPTc6GEkaULQNmSqxZdUDfxn2jzJyquWEpgLr9m9Gy2bbrdf_tRI5dTHEFDmmbJ7mNZhJAke1g00PbEvg8KO39mTRZkj2ha-x4nyditb1HMcGRDWgpppMinOWujeRha1Ikb2zDtePNSTOoSFn37PqRvPkfKfn35T7c9pIXUYIL311lU6rIrrn3zk6drA";

const IMG_T1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAYCmQWHx3I0hMszieL3Bnf39WBYcg-O6XZm9v38vvG3y8qZELmCbQX4vZwxSD8UWZ_l1lE1aCEFMIp2Enh_fotd9CnOWWMEjMgnlwzeeYw0mdr0d04nYYrbnUr5hEdYiyR_lyovB91GM1sPCfSyHV3O_LMylCqvc2D39Dvei6_5gS63vPerIbOmBrA47xIcV-HPX7OB7OwKzQu2ow7Uc4gVKZuz3AxkKQgaTsfp_HbMkxJzULxijKn5mPFvhKFtafF7P7oSooG_i0";
const IMG_T2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCdb2g4YOHVav92cvbhJGxyFrXlEPvlv7dsDDUaqE5RPT3dNkawF7aYXlPXulBU7eiWV29o50XRwbRHL5NGHSBEN4YhekXErP9VVJuTvYHKJzoVMrmmtsBE8QX4yAVG6JerpB4VNFWXyCc7JqssAK_wVF2Ovln5geXRqf3fsBYMKwfRFiEDm96ggYhTTsIIRZ-dTlxEO0ogWgrfP5r5B8x5RNOkEz7ZyIAmDtMPQeQYhVHrKCcrPYcHcZWeybk2vrE2jyfoM6XCmjM";
const IMG_T3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5bJTpu9t4u3mvFBfbf672N-MSqV9rw2U0KSKqejIZABWZNI9ex77eVrsvLf3CgbByQijBB5ISPj8up6U_blWUTAjW12gbf-eYbExwg9AQJ1HPuxyjjgyi4M6z0Eb-o-vGs0tNtZCGDLMRROPcNiUOe8HHT0Z4DQks-i8IidVuENWoSAKJ1wYmPbEShfCxObv_0HWAEgGmjdAtlh4iX9zOut7VZZ2KotrVQH9sIaj-vGajm8GTspOLWMn8yLnK7mUxOzckLDvwo84";
const IMG_T4 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8qefBvZR3CkXeGrrZx9pAcRjrbIQwcedMh01U4_u7rsUyY_3xr2WYrNlZ65kvIMQW3-cY8jEIxfwXvVbaX3UbEaoxt6Y1nILVNEMaq5j8wVFLBN5j4lFpDNVjVsYzNx2-y-IBDsqA7CMvxgKXc0H1p8cp3J16PwDc23yy08jSKeEGSWHAe_o3UkFN7nOEmjC_3wdKD1_BUnNUwrBW08xM4NHkoSGDD57axokw75g4THT-hqH1BEEf9uIPJhCwEBb8ix9w_NSjpeo";

const AVATAR_DETAIL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCn364hrQxiHgIFQjBEK3EnPIVIjBwOWtNTxsFNVfOkGAl-shr2ujFOlST-ArgFqhAFFHrSnIU9PItRhknUz4ZOV3I5lxOsyp_cG2P5ZU5DBz91snylubHPb0WAb9F3PRiVUuwa8pny04VgPzHMrnbQfRRFgsyEh6a6GF7HPoVOgH7u6rx5BSi5gm3-3h6qsFthHGHzEYR8xPI-kWn4eRzVgkrFj766r79kMdjTYm3UMhI9cBdVgYYPCODCdQ0A9p1doD1QhXcKFKY";

const RELATED = [
  {
    slug: "cryptic-dungeon-kit",
    title: "Cryptic Dungeon Kit",
    subtitle: "Environment • 85 Assets",
    price: "$19.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJnrw3z044JpL7VN_bAnFLy2Leh5vRnVC9t86uUW9Eb6n2A2ina-LR8VLy5qnlrm3LDT2RFibtrUIWIg71h7HIL7WQFA1N_sQnRPJdiYxTbuj8qQnZ1BjnuSumHX0v4Gp8Q4rmZE4BKnVjLoPle4ckTgliPi1XtjKJ6mT8M0uIwFWAO7XiS0734VzB1Z_vEb-PP4Mg7XnRrZrjQdyph-SG5EyDMMnWk7xWrL4nY_3F3KYz36sa-wP900_5aJzwGmRZUCkmuCkruHU",
  },
  {
    slug: "stylized-nature-pack",
    title: "Stylized Nature Pack",
    subtitle: "Environment • 120 Assets",
    price: "$14.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXHWGqYwmFHwGTaL8HEIMNP7nv7-0i0DXfC4cuxwZBbp4Axe2Mwt0o7RPM4eOT2dcZn8FsakDYM84yzBCEEAYP7UOR9jbVVZOM4SaNjv8NPuDh6VkXeMLEusG-LK7jS5jXAa_G8zIElije0kYZ8yBeaP4IIikMxb9Y1AMtyfUcd4qB7tRbFipoq4Th0JTYwKFRBEriZaPyrSFpwWgrrioCovXTs73KdVj_UEAOMz3Du6gZevF9ZZC0_WIUuh_BnHbAlqq9wD067_Y",
  },
  {
    slug: "neo-future-ui-kit",
    title: "Neo-Future UI Kit",
    subtitle: "UI Kits • 200 Elements",
    price: "$29.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYlYlzrrfQrsDveAdbvSq2LzcKeECDviobb9yrqkK_Qvm0eSoHt8rnc82Omj3Oc_EG5-POuF3XhRTR5Pa-z2hYw1S-r6HwZP5aupNNokQyov3j8bHKp0bxKF7z5oGBeSP2cFjO3G4hwkLCtkvnH5qZRGuAI0aIh4mZ9LI-l33AZJPYaM7Y8nnrj18-Gvb6l53ps47KGZgZcksWeJOuL8wPNw-ZJml_pg0cedHCkbYItViFTdC-iSmFrdfekYyWRxZ7z5a-DoYBYgk",
  },
  {
    slug: "industrial-zone-pack",
    title: "Industrial Zone Pack",
    subtitle: "Environment • 110 Assets",
    price: "$24.99",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAq9IxAomlwdB50avCLzUViO2mOTdwECEuzogT0XlBGyswfaDc_hBNEObHZPBIRWe_iQpl219bk1FEuJ2lrvUh4Pky9cPG4-WKmOwqo5Dv_CHuJ6AEWCUB74HlRBC9ibDUH3eeYl6jWJumsDbdgc_kNv7dq5Jgq-AGVkSQjEJX8C-utBkc-Gg-UtbEfoC9wXwNmZfLhUJ16bFF0FjRjVFQZfh5oyKSYAdqTTEP3nCQkCf-ll896PU50SXEck82ToATjFui200PdNg",
  },
];

const KIT_ICONS = [
  { icon: "home", label: "Merchant House" },
  { icon: "water", label: "Stone Well" },
  { icon: "fence", label: null },
  { icon: "church", label: null },
  { icon: "castle", label: null },
  { icon: "outdoor_garden", label: null },
  { icon: "stairs", label: null },
  { icon: "link", label: null },
  { icon: "forest", label: null },
  { icon: "agriculture", label: null },
];

export const ASSET_DETAILS = {
  "fantasy-town-kit": {
    breadcrumbCategory: "3D Assets",
    title: "Fantasy Town Kit",
    rating: 4.8,
    reviewCount: 124,
    sellerName: "PixelForge Studio",
    price: "$24.99",
    saleBadge: "Sale -20%",
    mainImage: IMG_FANTASY_MAIN,
    thumbnails: [IMG_T1, IMG_T2, IMG_T3, IMG_T4],
    description:
      "The Fantasy Town Kit is a comprehensive collection of over 150 high-quality modular assets designed to help you build immersive medieval and fantasy environments. Each piece has been meticulously crafted with performance and visual fidelity in mind, featuring custom LODs and high-resolution PBR textures.",
    features: [
      {
        title: "Modular Design",
        text: "Snap pieces together on a grid for endless building variety.",
      },
      {
        title: "PBR Ready",
        text: "Albedo, Metallic, Normal, and AO maps included at 4K.",
      },
      {
        title: "Engine Optimized",
        text: "Includes LODs and custom colliders for all assets.",
      },
      {
        title: "Bonus Content",
        text: "Includes an example scene shown in renders.",
      },
    ],
    kitTitle: "Kit Components (150+)",
    kitIcons: KIT_ICONS,
    kitMoreCount: 140,
    meta: {
      fileSize: "1.2 GB",
      format: "FBX, Unity, Blend",
      published: "Oct 12, 2023",
      version: "1.4.2",
    },
    creator: {
      name: "PixelForge Studio",
      followers: "2.4k Followers",
      assets: "42 Assets",
    },
    related: RELATED,
    avatarUrl: AVATAR_DETAIL,
  },
  "ultimate-mythic-bundle": {
    breadcrumbCategory: "Account Bundles",
    title: "Ultimate Mythic Account Bundle",
    rating: 4.9,
    reviewCount: 242,
    sellerName: "GhostGamer",
    price: "$1,299.00",
    saleBadge: null,
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZXXm6PCLJDVQh9tahj4iN7fh5ZQYzlxRwMjEI7ddg7iP4I7EMFJKjROm8LV-zQCJFdMbnJa4WVKWhCxNqmbWw4K5JIBtR0sA124HqRXal1lijGNQBu4783idCdGkQ6setfL2RHD5q2TJdQr7IuKKMXKSTE_G-rsjfUSzuKNdKKXBEOPO284EO0bem2k0JDRCO9Md5TYlXKm9tAITmoCtFWl8EQJZI5mmyo4W6XUBUUI9YEvJHA8zwiCIzJtk3eLjNq2SUzUTLKzY",
    thumbnails: [],
    description:
      "Verified elite account bundle with rare mythic cosmetics, exclusive titles, and seasonal passes. Transfer assistance and escrow-backed delivery included.",
    features: [
      { title: "Verified seller", text: "Escrow and fraud protection on every sale." },
      { title: "Full access", text: "Linked credentials and recovery guidance provided." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "—",
      format: "Account transfer",
      published: "Jan 8, 2025",
      version: "—",
    },
    creator: {
      name: "GhostGamer",
      followers: "18k Followers",
      assets: "32 Listings",
    },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
  "m416-glacier-skin": {
    breadcrumbCategory: "Weapon Skins",
    title: "Lvl 7 M416 Glacier Skin",
    rating: 4.8,
    reviewCount: 89,
    sellerName: "IceKing",
    price: "$450.00",
    saleBadge: "New",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wQHk0eSQebLvBXbGTn8ft7llCIOMntDO5MVhFHVr3YIICvqQxlCQ4jpZ0w96IV6agVBVZYImRFddQtpkLJemGsELFCK5gkfvyQgQqV0Ay2OvTv4OqsPvbAJL4zR6zMLAFe56b8DRLM_gOp53jWSFYHM1Ebl0X0ofXgsrFfti6rw2Vyl1ddtWXx_EpVp8202_Uv0_ZtGuef1A2WHZYv-91ifWMY1yxVE7UdbmWXd7W1kyefeUQf73Idzf7OTp-v2oAbe5c_TYOWs",
    thumbnails: [],
    description:
      "Max-level Glacier M416 with full kill effect and loot crate animation. Safe trade via AssetVerse escrow.",
    features: [
      { title: "Kill effect", text: "Fully upgraded visual and death crate." },
      { title: "Secure trade", text: "Seller verification and delivery window." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "—",
      format: "In-game item",
      published: "Feb 2, 2025",
      version: "—",
    },
    creator: { name: "IceKing", followers: "5k Followers", assets: "12 Listings" },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
  "streamer-ui-pack": {
    breadcrumbCategory: "UI Kits",
    title: "Streamer Overlays & UI Pack",
    rating: 4.7,
    reviewCount: 56,
    sellerName: "DesignVault",
    price: "$29.99",
    saleBadge: "Verified",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcE-GVaXmWbe6-7Fz0bVk8uew-_FfVXmDH4hPX4--emogmIt5GGihfed6zQDQAD3bXsjJRFJHHXOTXs8NTeBgjiZLFGMOrARGC6k7DmE8Ios89DaCxT6Z2OKnKDz6Tli4u2ZACZT6E0byU-68eifSn8RLbAINUL0DIugW_TFu8HYRG0LRyRfnlCGfYWGhjF9pHV1QEMxg090rzbaTBIJIeE0DX-Tn5G09RgqFrTeJcMUXM92bsmrh6Hof3BsZJh5ZBX6J4X_ZYi14",
    thumbnails: [],
    description:
      "OBS-ready overlays, alerts, and lower-thirds in layered PSD and PNG. Includes brand color variants.",
    features: [
      { title: "OBS / Streamlabs", text: "One-click scene collections included." },
      { title: "Editable", text: "Source files for fonts and colors." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "890 MB",
      format: "PSD, PNG, MOV",
      published: "Nov 3, 2024",
      version: "2.1",
    },
    creator: {
      name: "DesignVault",
      followers: "9k Followers",
      assets: "67 Assets",
    },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
  "conqueror-rank-bundle": {
    breadcrumbCategory: "Services",
    title: "Conqueror Rank Push Bundle",
    rating: 4.6,
    reviewCount: 31,
    sellerName: "RankBoost Elite",
    price: "$120.00",
    saleBadge: "Hot",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZXXm6PCLJDVQh9tahj4iN7fh5ZQYzlxRwMjEI7ddg7iP4I7EMFJKjROm8LV-zQCJFdMbnJa4WVKWhCxNqmbWw4K5JIBtR0sA124HqRXal1lijGNQBu4783idCdGkQ6setfL2RHD5q2TJdQr7IuKKMXKSTE_G-rsjfUSzuKNdKKXBEOPO284EO0bem2k0JDRCO9Md5TYlXKm9tAITmoCtFWl8EQJZI5mmyo4W6XUBUUI9YEvJHA8zwiCIzJtk3eLjNq2SUzUTLKzY",
    thumbnails: [],
    description:
      "Rank push service with squad coordination and schedule windows. ToS-compliant regions only.",
    features: [
      { title: "Squad play", text: "Dedicated roster for your push window." },
      { title: "Reporting", text: "Daily progress screenshots." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "—",
      format: "Service",
      published: "Mar 1, 2025",
      version: "—",
    },
    creator: {
      name: "RankBoost Elite",
      followers: "3k Followers",
      assets: "8 Listings",
    },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
  "exotic-voice-ghost": {
    breadcrumbCategory: "Voice Packs",
    title: "Exotic Voice Pack: Ghost",
    rating: 4.5,
    reviewCount: 18,
    sellerName: "AudioPro",
    price: "$45.00",
    saleBadge: null,
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wQHk0eSQebLvBXbGTn8ft7llCIOMntDO5MVhFHVr3YIICvqQxlCQ4jpZ0w96IV6agVBVZYImRFddQtpkLJemGsELFCK5gkfvyQgQqV0Ay2OvTv4OqsPvbAJL4zR6zMLAFe56b8DRLM_gOp53jWSFYHM1Ebl0X0ofXgsrFfti6rw2Vyl1ddtWXx_EpVp8202_Uv0_ZtGuef1A2WHZYv-91ifWMY1yxVE7UdbmWXd7W1kyefeUQf73Idzf7OTp-v2oAbe5c_TYOWs",
    thumbnails: [],
    description:
      "Limited voice lines pack with mix-ready stems and preview clips.",
    features: [
      { title: "Stems", text: "Dry and processed variants." },
      { title: "License", text: "Indie game license included." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "120 MB",
      format: "WAV, MP3",
      published: "Dec 12, 2024",
      version: "1.0",
    },
    creator: { name: "AudioPro", followers: "2k Followers", assets: "24 Assets" },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
  "legendary-xsuit-silvanus": {
    breadcrumbCategory: "Cosmetics",
    title: "Legendary X-Suit: Silvanus",
    rating: 4.9,
    reviewCount: 201,
    sellerName: "MythicMarket",
    price: "$980.00",
    saleBadge: "Verified",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcE-GVaXmWbe6-7Fz0bVk8uew-_FfVXmDH4hPX4--emogmIt5GGihfed6zQDQAD3bXsjJRFJHHXOTXs8NTeBgjiZLFGMOrARGC6k7DmE8Ios89DaCxT6Z2OKnKDz6Tli4u2ZACZT6E0byU-68eifSn8RLbAINUL0DIugW_TFu8HYRG0LRyRfnlCGfYWGhjF9pHV1QEMxg090rzbaTBIJIeE0DX-Tn5G09RgqFrTeJcMUXM92bsmrh6Hof3BsZJh5ZBX6J4X_ZYi14",
    thumbnails: [],
    description:
      "Full legendary suit with exclusive lobby animation and mythic emote set. Escrow delivery.",
    features: [
      { title: "Lobby animation", text: "Unique entry and idle set." },
      { title: "Mythic emotes", text: "Bundle-exclusive emotes included." },
    ],
    kitTitle: null,
    kitIcons: [],
    kitMoreCount: 0,
    meta: {
      fileSize: "—",
      format: "In-game bundle",
      published: "Jan 20, 2025",
      version: "—",
    },
    creator: {
      name: "MythicMarket",
      followers: "22k Followers",
      assets: "54 Listings",
    },
    related: RELATED.slice(0, 4),
    avatarUrl: AVATAR_DETAIL,
  },
};

/** Checkout order line / thumbnail overrides (defaults use `detail`) */
export const CHECKOUT_PRESENTATION = {
  "ultimate-mythic-bundle": {
    subtitle: "Lv. 75 • Glacier Max • Conqueror",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU52iZIY3gzWe0YcZ846Ig6zeBgLkIgtXMDcT0Pg0SABf9QpvCzJ0k3znUdsohYy_6yUk_-i5ucELWX8MiBGAwR81YDt_mheMaNp2cBOrcM_tUuiROC24cNi--BLH0vIuz79uZ3eNkJpJih2BKea6baq3i32AWrtGHp-03uMsy_cN9dgXp39XPjA0ClrHa_w5ZjnJ3_ud6KudgYg-xnPf9E1aGECmpqHuniklRb54bJnB5Bp5pZNiyIqdZ5tfts4P3Eo-8gVePDFs",
  },
};

export function getCheckoutPresentation(assetId, detail) {
  const extra = CHECKOUT_PRESENTATION[String(assetId)];
  return {
    imageUrl: extra?.imageUrl ?? detail.mainImage,
    subtitle:
      extra?.subtitle ??
      `${detail.breadcrumbCategory} • ${detail.meta.format} • ${detail.sellerName}`,
  };
}

export function getAssetDetail(assetId) {
  if (!assetId) return null;
  return ASSET_DETAILS[String(assetId)] ?? null;
}
