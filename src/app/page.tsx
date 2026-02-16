import Image from "next/image";

const seasons = [
  { slug: "season-1", title: "Season 1: Indigo League" },
  { slug: "season-2", title: "Season 2: The Adventures In The Orange Islands" },
  { slug: "season-3", title: "Season 3: The Johto Journeys" },
  { slug: "season-4", title: "Season 4: Johto League Champions" },
  { slug: "season-5", title: "Season 5: Master Quest" },
  { slug: "season-6", title: "Season 6: Advanced" },
  { slug: "season-7", title: "Season 7: Advanced Challenge" },
  { slug: "season-8", title: "Season 8: Advanced Battle" },
  { slug: "season-9", title: "Season 9: Battle Frontier" },
  { slug: "season-10", title: "Season 10: Diamond And Pearl" },
  { slug: "season-11", title: "Season 11: Diamond And Pearl Battle Dimension" },
  { slug: "season-12", title: "Season 12: Diamond And Pearl Galactic Battles" },
  { slug: "season-13", title: "Season 13: Sinnoh League Victors" },
  { slug: "season-14", title: "Season 14: Black and White" },
  { slug: "season-15", title: "Season 15: BW Rival Destinies" },
  { slug: "season-16", title: "Season 16: BW Adventures in Unova" },
  {
    slug: "season-16-beyond",
    title: "Season 16: BW Adventures In Unova and Beyond",
    listTitle: "Season 16 (Part 2): BW Adventures In Unova and Beyond",
  },
  { slug: "season-17", title: "Season 17: XY" },
];

const latestEpisodes = [
  {
    num: 880,
    img: "/episodes/ep880.png",
    title: "Pokemon Episode 880 \u2013 The Tiny Caretaker!",
    desc: "Team Rocket sneaks into the lab and finds a sleeping Tyrunt, at night. The Tyrunt escapes team rocket. Bonnie find it. The Tyrunt appears lost and the gang protects and try to find where it came from, while Bonnie takes care of it.",
    season: "Season 17: XY",
  },
  {
    num: 879,
    img: "/episodes/ep879.png",
    title: "Pokemon Episode 879 \u2013 A Legendary Photo Op!",
    desc: "Ash and friends are excited to bump into their old pal Trevor and his newly evolved Charmeleon. Trevor wants to grab a photo of the Legendary Pokemon Moltres to complete his set of legendary bird pictures. Team rocket is there as well.",
    season: "Season 17: XY",
  },
  {
    num: 878,
    img: "/episodes/ep878.png",
    title: "Pokemon Episode 878 \u2013 Mending a Broken Spirit!",
    desc: "Ash, Clemont and Bonnie enjoy a meal, while Serena practices for next Showcase performance. Showcase routine comes to a halt, when Pancham accidentally breaks Braixen favorite branch, upsetting and hurting her, so the group decides to find a new twig and cheer up Braixen.",
    season: "Season 17: XY",
  },
  {
    num: 877,
    img: "/episodes/ep877.png",
    title: "Pokemon Episode 877 \u2013 Adventures in Running Errands!",
    desc: "Ash and friends arrive in the Pokemon Center, as a refugee from the rain. Nurse Joy checks up on the Pokemon. The power goes OUT at the Pokemon Center! In comes the savior Clemont, he sends Chespin along with Bunnelby to town.",
    season: "Season 17: XY",
  },
  {
    num: 876,
    img: "/episodes/ep876.png",
    title: "Pokemon Episode 876 \u2013 Over the Mountain of Snow!",
    desc: "While continuing on their next adventure, Ash and friends are forced to ride through the hills as it has heavy snow, to get to their next destination. They can\u2019t do it on their own, so they enlist the aid of two strong Mamoswine to carry them over.",
    season: "Season 17: XY",
  },
  {
    num: 875,
    img: "/episodes/ep875.png",
    title: "Pokemon Episode 875 \u2013 A Festival Trade! A Festival Farewell?",
    desc: "Ash and his friends, plus Team Rocket arrived at a costume festival and have fun. Team Rocket shockingly attempts to capture Pikachu, but get stopped by Count Pumpk and his steward when the Count\u2019s Pumpkaboo falls in love with Jessie\u2019s.",
    season: "Season 17: XY",
  },
  {
    num: 874,
    img: "/episodes/ep874.png",
    title: "Pokemon Episode 874 \u2013 Rotom\u2019s Wish!",
    desc: "Ash and gang arrive at a hotel for the night. They witness the owner taking Pokemon from trainers he defeated. Ash stands up to battle the owner. The owner and his gang attempt to take Ash and his friends down, but a Rotom appears and saves them.",
    season: "Season 17: XY",
  },
  {
    num: 873,
    img: "/episodes/ep873.png",
    title: "Pokemon Episode 873 \u2013 Performing with Fiery Charm!",
    desc: "Time for Serena\u2019s second Pokemon Showcase taking place in Dendemille Town. But, she faces a tougher competition this time, when a her rival Miette appears entering the Showcase to back Serena into a corner.",
    season: "Season 17: XY",
  },
  {
    num: 845,
    img: "/episodes/ep845.png",
    title: "Pokemon Episode 845 \u2013 When Light and Dark Collide!",
    desc: "Ash and friends are scared at the start but then they hear a scream. WHO IS IT? Then they find that the show Super Pok\u00e9mon Battle is being shot near by and the main actor is injured. What will happen? Watch the episode!",
    season: "Season 17: XY",
  },
  {
    num: 844,
    img: "/episodes/ep844.png",
    title: "Pokemon Episode 844 \u2013 Pathways to Performance Partnering!",
    desc: "Ash and friends on their way to Coumarine City, Clemont\u2019s Chespin and Serena\u2019s Pancham get into a bit of a rough. After Pancham and Chespin get into a fight, Ash, Serena, Clemont, and Bonnie meet Nini, a Pok\u00e9mon Performer preparing for the Pok\u00e9mon Showcase.",
    season: "Season 17: XY",
  },
];

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { slug: string; title: string }[];
}) {
  return (
    <li className="group relative h-[36px] leading-[36px] border border-solid border-[#21437c] px-[30px] hover:bg-[#3a5cac] hover:border-[#5875b5] cursor-pointer">
      <a
        href="#"
        className="text-[14px] font-bold text-[#ffcb05] no-underline uppercase whitespace-nowrap"
      >
        {label}
      </a>
      <ul className="hidden group-hover:block absolute top-[36px] left-0 w-[305px] z-[200] border-b border-solid border-[#6281b6] bg-[#2a4075] p-0 m-0">
        {items.map((item) => (
          <li
            key={item.slug}
            className="h-[28px] leading-[28px] pl-[15px] border-b border-dashed border-[#687fa6] hover:[text-shadow:0_0_20px_yellow] m-0"
          >
            <a
              href="#"
              className="text-[12px] font-normal leading-[30px] text-white no-underline hover:text-[#ffdb4f]"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <li className="h-[36px] leading-[36px] border border-solid border-[#21437c] px-[30px] hover:bg-[#3a5cac] hover:border-[#5875b5] cursor-pointer">
      <a
        href="#"
        className="text-[14px] font-bold text-[#ffcb05] no-underline uppercase whitespace-nowrap"
      >
        {label}
      </a>
    </li>
  );
}

function EpisodeRow({ ep }: { ep: (typeof latestEpisodes)[0] }) {
  return (
    <div className="flex items-start mb-[15px]">
      <div className="w-[100px] shrink-0 mr-[15px]">
        <a href="#">
          <Image
            src={ep.img}
            width={100}
            height={ep.num <= 873 ? 60 : 50}
            alt={`Pokemon episode ${ep.num}`}
          />
        </a>
      </div>
      <div className="flex-1">
        <a href="#" className="text-[#ffdb4f] no-underline block">
          <h2 className="text-[#ffdb4f] text-[16px] border-b border-solid border-[#ffdb4f] pb-[7px] mb-[8px] transition-colors duration-200 hover:text-[#007AFF]">
            {ep.title}
          </h2>
        </a>
        <div className="border-b border-solid border-[#557cc2] pb-[10px] text-[12px] leading-[18px]">
          <b>Episodes event: </b>
          {ep.desc}
          <div className="text-right mt-[5px]">
            Pokemon{" "}
            <a href="#" className="text-[#058fcf]">
              {ep.season}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function BluePanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div
        className="px-[20px] py-[15px]"
        style={{
          background: "linear-gradient(180deg, #2e508e 0%, #213d72 100%)",
          borderRadius: "5px 5px 0 0",
          border: "1px solid #3a5a90",
          borderBottom: "none",
        }}
      >
        {children}
      </div>
      <div
        className="h-[8px]"
        style={{
          background: "linear-gradient(180deg, #1c3562 0%, #16294d 100%)",
          borderRadius: "0 0 5px 5px",
          border: "1px solid #1a3060",
          borderTop: "none",
        }}
      />
    </div>
  );
}

function RightBluePanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div
        className="px-[15px] py-[12px]"
        style={{
          background: "linear-gradient(180deg, #2e508e 0%, #213d72 100%)",
          borderRadius: "5px 5px 0 0",
          border: "1px solid #3a5a90",
          borderBottom: "none",
        }}
      >
        {children}
      </div>
      <div
        className="h-[7px]"
        style={{
          background: "linear-gradient(180deg, #1c3562 0%, #16294d 100%)",
          borderRadius: "0 0 5px 5px",
          border: "1px solid #1a3060",
          borderTop: "none",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: "url('/images/topbg.png')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top left",
      }}
    >
      <div className="pb-[100px]">
        {/* Header */}
        <div style={{ width: 950, margin: "0 auto", position: "relative", zIndex: 100 }}>
          <div style={{ padding: "20px 0 5px 5px" }}>
            <a href="#">
              <Image
                src="/images/logo.png"
                width={329}
                height={103}
                alt="Pokemon episodes online"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex" style={{ width: 950 }}>
            <div
              style={{
                width: 8,
                height: 48,
                backgroundImage: "url('/images/navi_left.png')",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
            <div
              className="flex-1"
              style={{
                height: 48,
                backgroundImage: "url('/images/navi_center.png')",
                backgroundRepeat: "repeat-x",
              }}
            >
              <ul className="flex h-full items-start pt-[6px]">
                <NavDropdown label="Seasons" items={seasons} />
                <NavItem label="Movies" />
                <NavDropdown
                  label="Extra Episodes"
                  items={[
                    { slug: "special-episodes", title: "Special Episodes" },
                    { slug: "chronicles", title: "Chronicles Episodes" },
                    { slug: "banned", title: "Banned Episodes" },
                  ]}
                />
                <NavItem label="Fan Chat" />
              </ul>
            </div>
            <div
              style={{
                width: 18,
                height: 48,
                backgroundImage: "url('/images/navi_right.png')",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        {/* Main Container */}
        <div style={{ width: 950, margin: "0 auto", paddingTop: 10, paddingBottom: 20, position: "relative", zIndex: 50 }}>
          {/* Ad Banner */}
          <div
            style={{
              background: "#21437c",
              padding: "10px 0",
              textAlign: "center",
              color: "#557cc2",
              fontSize: 14,
              width: "100%",
            }}
          >
            Ad Space
          </div>

          {/* Two Column Layout */}
          <div className="flex" style={{ marginTop: 5, gap: 10 }}>
            {/* ===== LEFT COLUMN ===== */}
            <div style={{ width: 640, flexShrink: 0 }}>
              {/* Featured Episode 1 */}
              <BluePanel className="mt-[10px]">
                <div className="flex items-start">
                  <div className="shrink-0 mr-[15px]" style={{ width: 100 }}>
                    <a href="#">
                      <Image
                        src="/episodes/ep1.png"
                        width={100}
                        height={57}
                        alt="Pokemon episode 1"
                      />
                    </a>
                  </div>
                  <div className="flex-1">
                    <a href="#" className="text-[#ffdb4f] no-underline block">
                      <h2 className="text-[#ffdb4f] text-[16px] border-b border-solid border-[#ffdb4f] pb-[7px] mb-[8px] hover:text-[#007AFF] transition-colors">
                        Watch Pokemon Episode 1 &ndash; Pokemon I Choose You
                      </h2>
                    </a>
                    <div className="border-b border-solid border-[#557cc2] pb-[10px] text-[12px] leading-[18px]">
                      <b>Episodes event: </b>The episode that starts it all. Ash
                      arrives late to pick his first Pokemon.
                    </div>
                  </div>
                </div>
              </BluePanel>

              {/* Season Banners */}
              <div className="flex justify-center mt-[15px] gap-[4px]">
                <a href="#">
                  <Image
                    src="/seasons/season1.png"
                    width={200}
                    height={91}
                    alt="Season 1: Indigo League"
                    style={{ border: "2px solid white" }}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/seasons/season8.png"
                    width={200}
                    height={91}
                    alt="Season 7: Advanced Challenge"
                    style={{ border: "2px solid white" }}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/seasons/season14.png"
                    width={200}
                    height={91}
                    alt="Season 14: Black and White"
                    style={{ border: "2px solid white" }}
                  />
                </a>
              </div>

              {/* Latest Pokemon Episodes Header */}
              <div style={{ marginTop: 25, marginBottom: 10 }}>
                <div
                  style={{
                    backgroundImage: "url('/images/header_top_bg.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    padding: "20px 0 10px 15px",
                  }}
                >
                  <h2 className="text-[20px] font-bold leading-[16px]">
                    Latest Pokemon Episodes
                  </h2>
                </div>
                <div
                  style={{
                    height: 6,
                    backgroundImage: "url('/images/header_bottom_bg.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                />
              </div>

              {/* Latest Episodes List */}
              <BluePanel>
                {latestEpisodes.map((ep) => (
                  <EpisodeRow key={ep.num} ep={ep} />
                ))}
              </BluePanel>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div style={{ width: 300, flexShrink: 0 }}>
              {/* Share */}
              <RightBluePanel className="mt-[10px]">
                <Image
                  src="/images/share_pokemon.png"
                  width={250}
                  height={117}
                  alt="Share Watch Pokemon Episodes"
                />
                <h2 className="text-[22px] text-[#ffcc00] mt-[8px]">
                  Share Pokemon Episodes
                </h2>
                <div className="flex gap-[10px] mt-[10px]">
                  <div className="bg-[#1da1f2] text-white text-center py-[6px] px-[14px] text-[12px] font-bold rounded-[3px]">
                    Tweet
                  </div>
                  <div className="bg-[#dd4b39] text-white text-center py-[6px] px-[14px] text-[12px] font-bold rounded-[3px]">
                    +1
                  </div>
                  <div className="bg-[#3b5998] text-white text-center py-[6px] px-[14px] text-[12px] font-bold rounded-[3px]">
                    Like
                  </div>
                </div>
              </RightBluePanel>

              {/* Search */}
              <div
                className="mt-[20px] mb-[15px]"
                style={{
                  backgroundImage: "url('/images/search_bg.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  padding: 10,
                }}
              >
                <h2 className="text-[16px] text-[#ffcc00]">
                  Search Pokemon Episodes
                </h2>
                <div className="flex mt-[8px] gap-[5px]">
                  <input
                    name="s"
                    type="text"
                    className="h-[27px] bg-[#1a3060] text-white text-[12px] pl-[5px] focus:outline-none flex-1"
                    style={{ border: "1px solid #3a5a8a" }}
                  />
                  <input
                    type="submit"
                    value="SEARCH"
                    className="h-[27px] cursor-pointer bg-[#ffcb05] text-[#21437c] font-bold text-[12px] uppercase px-[12px]"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              {/* Next Episode */}
              <div
                className="mb-[15px]"
                style={{
                  backgroundImage: "url('/images/search_bg.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  padding: 10,
                }}
              >
                <h2 className="text-[16px] text-[#ffcc00]">
                  Next Episode - November 7, 2015
                </h2>
                <b className="text-[12px] mt-[5px] block">
                  Pokemon Episode 881 - A Trip Down Memory Train!
                </b>
              </div>

              {/* Current Season */}
              <RightBluePanel>
                <h2 className="text-[22px] text-[#ffcc00] mb-[8px]">
                  Current Season
                </h2>
                <a href="#" className="block">
                  <Image
                    src="/seasons/PokemonXY.png"
                    width={239}
                    height={133}
                    alt="Watch Season 17 XY Episodes"
                  />
                </a>
                <a
                  href="#"
                  className="text-[#ffcc00] block mt-[8px]"
                >
                  Pokemon XY Episodes - Season 17
                </a>
              </RightBluePanel>

              {/* Pokemon Seasons List */}
              <div
                className="mt-[15px]"
                style={{
                  background: "linear-gradient(180deg, #2e508e 0%, #213d72 100%)",
                  borderRadius: 5,
                  border: "1px solid #3a5a90",
                  padding: "10px 15px 15px 15px",
                }}
              >
                <h2 className="text-[18px] text-[#ffcc00] mb-[5px]">
                  Pokemon Seasons
                </h2>
                <ul>
                  {seasons.map((s) => (
                    <li key={s.slug} className="pt-[8px]">
                      <a
                        href="#"
                        className="text-[#ffcc00] underline hover:text-white hover:no-underline hover:[text-shadow:0_0_20px_yellow]"
                      >
                        {("listTitle" in s && s.listTitle) || s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div className="mt-[15px]">
                <h2 className="text-[17px] text-[#ffcc00]">
                  Welcome to Pokemon Episodes Online
                </h2>
                <p className="text-[14px] leading-[20px] mt-[10px] text-white">
                  We have all the Pokemon Episodes for you to Watch online Free.
                  Watch Pokemon Episodes Online allows you to Watch Pokemon
                  Episodes Free and gives you all the Pokemon Episodes in High
                  Quality. We keep adding the Latest Pokemon Episodes so you can
                  watch it for Free. Watch Pokemon Epiosdes Online is always
                  updated with the latest Pokemon Episodes, so bookmark us or
                  follow us on twitter, to come back and Watch the Latest Pokemon
                  Episodes.
                </p>
                <h2 className="text-[17px] text-[#ffcc00] mt-[15px]">
                  About Pokemon
                </h2>
                <p className="text-[14px] leading-[20px] mt-[10px] text-white">
                  Follow the adventures of Ash Ketchum and Pikachu as they go on
                  adventures to catch Pokemons. They are joined by two companions
                  each season. Also watch the Team Rocket fail miserably as they
                  try to catch Pikachu each episode.
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-[10px] mt-[25px] pl-[5px]">
            <Image
              src="/images/follow_img.jpg"
              alt="Follow Watch Pokemon Episodes"
              height={17}
              width={133}
            />
            <a href="#" className="ml-[15px]">
              <Image
                src="/images/tweeter_img.jpg"
                alt="Follow us on Twitter"
                height={28}
                width={28}
              />
            </a>
            <a href="#">
              <Image
                src="/images/facebook_img.jpg"
                alt="Become a fan on Facebook"
                height={28}
                width={28}
              />
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mt-[10px] text-[11px] leading-[16px] text-gray-300">
            Disclaimer This website does not host any of the pokemon episodes. We
            only link or embed content that was uploaded to popular Online Video
            hosting sites like Youtube.com / Megavideo.com / Videobb.com /
            Dailymotion.com / Putlocker.com. By surfing this website you are only
            viewing content uploaded by users on third parties websites and we do
            not take any responsibility for content hosted on other websites.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 80,
          backgroundImage: "url('/images/footer_bg.png')",
          backgroundRepeat: "repeat-x",
        }}
      >
        <div className="flex justify-between" style={{ width: 950, margin: "0 auto", paddingTop: 15 }}>
          <div>
            Watch Pokemon Episodes Online Free!
            <br />
            <br />
            <a href="#" className="text-[#ffcc00] hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div>WatchPokemonEpisodes.com</div>
        </div>
      </div>
    </div>
  );
}
