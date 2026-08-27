"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  RoyalCornerOrnament,
  RoyalDivider,
} from "@/components/royal-corner-ornament";
import { MAHAPRASAD_IMAGE, JAGANNATH_TEMPLE_IMAGE } from "@/lib/heritage-images";

const blogPostsData: Record<string, any> = {
  "travelling-to-puri-for-rakhi-purnima": {
    title:
      "Travelling to Puri for Rakhi Purnima? How to Plan a Comfortable Jagannath Temple Trip",
    author: "Vikram Singh",
    authorRole: "Hospitality & Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "August 27, 2026",
    readTime: "6 min",
    category: "Travel",
    image: "/assets/blog/travelling-to-puri-for-rakhi-purnima.jpg",
    excerpt:
      "Rakhi Purnima carries a certain warmth wherever it's celebrated, but in Puri, it lands on a day already thick with sacred significance — the same Shravan Purnima that closes out Jhulana Jatra at the Jagannath Temple. For families travelling to Puri around this time, that overlap makes for a trip that's part festival, part pilgrimage, and part quiet tradition of its own.",
    content: `
      <p>Rakhi Purnima carries a certain warmth wherever it's celebrated, but in Puri, it lands on a day already thick with sacred significance — the same Shravan Purnima that closes out Jhulana Jatra at the Jagannath Temple. For families travelling to Puri around this time, that overlap makes for a trip that's part festival, part pilgrimage, and part quiet tradition of its own.</p>
      <p>This guide covers what to expect from Rakhi Purnima in Puri, how the day connects to the temple's own calendar, and how to plan a comfortable, well-organized Jagannath Temple trip around it.</p>

      <h2>When Rakhi Purnima Falls in 2026</h2>
      <p>Rakhi Purnima, also known as Raksha Bandhan, falls on Friday, August 28, 2026, observed on the full moon day of Shravan. In Puri specifically, this date holds extra weight, since it coincides with the final day of Jhulana Jatra, the temple's week-long swing festival for Lord Jagannath. Families visiting for Rakhi Purnima often find themselves arriving at the tail end of the festival's most significant evening, which adds a layer of temple ritual to what's otherwise a home-and-family occasion.</p>

      <h2>What Rakhi Purnima Looks Like in Puri</h2>
      <p>Rakhi Purnima in Puri blends the familiar sibling ritual — tying a rakhi, exchanging gifts, sharing a meal — with the town's temple-centered rhythm, since the same day marks Shravan Purnima at the Jagannath Temple. Many visiting families choose to begin the day with temple darshan before settling into their own Rakhi celebrations later, treating the morning as a spiritual start to a day that's otherwise about family. For devotees already in town for Jhulana Jatra, Rakhi Purnima naturally becomes the closing note of a week they've spent largely at the temple each evening.</p>

      <h2>Things to Do in Puri During Rakhi Purnima</h2>
      <p>A Puri trip during Rakhi Purnima usually centers on a few key experiences:</p>
      <ul>
        <li class="mb-3"><strong>Morning or evening darshan at the Jagannath Temple:</strong> Particularly meaningful on this specific Purnima given its overlap with Jhulana Jatra's conclusion.</li>
        <li class="mb-3"><strong>A quiet family breakfast or lunch:</strong> Often built around the day's Rakhi rituals before or after visiting the temple.</li>
        <li class="mb-3"><strong>A walk along Puri Beach:</strong> Especially in the early morning when the coast is calmer and the August humidity hasn't yet set in.</li>
        <li class="mb-3"><strong>Local shopping for rakhis, sweets, and gifts:</strong> Widely available in the markets around the temple in the days leading up to the festival.</li>
      </ul>

      <h2>Planning a Puri Trip for Rakhi Purnima</h2>
      <p>Planning a Puri trip during Rakhi Purnima works best when it's built around the temple's schedule rather than treated as a separate side activity. Because the date coincides with Jhulana Jatra's final evening, Puri sees a genuine rise in visitors in the days just before Purnima, and hotel availability near the temple tightens accordingly. Booking your stay several weeks ahead, rather than the week of, makes a real difference — particularly for anyone hoping to combine both the family celebration and a temple visit without rushing either one.</p>

      <h2>Best Time to Visit Puri During Rakhi Purnima</h2>
      <p>The best time to visit Puri during Rakhi Purnima is a day or two before the festival itself, giving you time to settle in, complete an unhurried temple darshan, and still be well-rested for the Rakhi celebrations on the day. Arriving the same morning tends to compress everything into a single rushed day — early travel, a hurried darshan, then trying to relax into a family occasion with little downtime in between. A short buffer of one or two extra nights changes the whole feel of the trip.</p>

      <h2>What to Know Before Visiting Puri During Rakhi Purnima</h2>
      <p>A few practical points worth keeping in mind:</p>
      <ul>
        <li class="mb-3"><strong>Temple crowds build ahead of Purnima:</strong> Plan darshan for early morning or later evening rather than midday.</li>
        <li class="mb-3"><strong>Dress code and entry rules:</strong> The same dress code and entry rules apply as any Jagannath Temple visit — modest clothing, and no phones, cameras, or leather items inside.</li>
        <li class="mb-3"><strong>Monsoon conditions:</strong> Monsoon conditions are still active in late August, so pack accordingly even if the days themselves are pleasant.</li>
        <li class="mb-3"><strong>Local markets get busy:</strong> Shopping for rakhis or gifts earlier in the week avoids the last-minute rush.</li>
      </ul>

      <h2>Where to Stay in Puri for a Jagannath Temple Visit</h2>
      <p>Choosing where to stay in Puri for a Jagannath Temple visit matters more during a busy period like this, since proximity affects everything from how early you can start your darshan to how easily you can return for a relaxed family day afterward. The best hotels in Puri for a Jagannath Temple visit tend to share a few qualities: a short walk to the temple, genuinely comfortable rooms for families travelling together, and a team familiar enough with the temple's calendar to help guests plan around festival timings rather than working it out on their own.</p>
      <p><a href="https://www.hotelvictoriagrand.com/" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Victoria Grand</a>, the <a href="https://www.hotelvictoriagrand.com/" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">best boutique hotel in Puri</a>, located on Chandan Hazuri Road just about a kilometre from the Jagannath Temple, fits this need well for families visiting during Rakhi Purnima. The hotel's proximity means an early-morning darshan is a short walk rather than a planned outing, leaving the rest of the day open for the family celebrations Rakhi Purnima is really about. After darshan, the rooftop Sunshine Restaurant offers a calm spot to sit down together, with the <a href="https://www.hotelvictoriagrand.com/venues" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Bay of Bengal visible beyond the rooftops</a> — a pleasant, unhurried way to move from temple visit into family time.</p>
      <p>For pilgrims and families comparing hotels near Jagannath Temple Puri for this particular weekend, that combination of <a href="https://www.hotelvictoriagrand.com/contact" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">walkable distance and genuine comfort</a> tends to be what makes the day feel complete rather than rushed.</p>

      <h2>Final Thoughts</h2>
      <p>Rakhi Purnima in Puri isn't quite like celebrating it anywhere else — the same day that closes Jhulana Jatra at the Jagannath Temple gives the festival an added spiritual dimension for families who choose to combine both. Planning around the temple's rhythm, booking a comfortable stay close by, and giving the trip a little breathing room rather than compressing it into a single day is really what turns a busy festival weekend into a trip worth remembering.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div class="faq-section space-y-4">
        <p><strong>1. When is Rakhi Purnima in 2026?</strong><br/>
        Rakhi Purnima, or Raksha Bandhan, falls on Friday, August 28, 2026, observed on Shravan Purnima.</p>

        <p><strong>2. Does Rakhi Purnima have any connection to the Jagannath Temple festival calendar?</strong><br/>
        Yes. In 2026, Rakhi Purnima falls on the same day as the concluding evening of Jhulana Jatra, the Jagannath Temple's week-long swing festival, giving the date added significance in Puri specifically.</p>

        <p><strong>3. What is the best time to visit Puri during Rakhi Purnima?</strong><br/>
        Arriving a day or two before the festival is ideal, giving you time for an unhurried temple darshan before settling into a relaxed day of Rakhi celebrations.</p>

        <p><strong>4. What should I know before visiting Puri during Rakhi Purnima?</strong><br/>
        Expect temple crowds to build in the days before Purnima, plan darshan for early morning or evening, follow the usual dress code, and pack for continuing monsoon conditions.</p>

        <p><strong>5. Where should I stay in Puri for a Jagannath Temple visit during this period?</strong><br/>
        A hotel within easy walking distance of the temple makes the most sense, especially with festival crowds around. Victoria Grand Hotel, about a kilometre from the temple, is a practical option for families visiting during Rakhi Purnima.</p>

        <p><strong>6. Do I need to book hotels in advance for this period?</strong><br/>
        Yes. Since the date overlaps with Jhulana Jatra's final evening, hotels near the temple fill up faster than usual, so booking several weeks ahead is recommended.</p>

        <p><strong>7. What else can families do in Puri besides visiting the temple?</strong><br/>
        Puri Beach, local markets for rakhis and sweets, and a relaxed family meal are all part of how most visiting families round out a Rakhi Purnima trip to the city.</p>
      </div>
    `,
  },
  "best-boutique-hotel-in-puri-for-jhulana-jatra": {
    title:
      "Best Boutique Hotel in Puri for Jhulana Jatra: Why Choose Victoria Grand Hotel?",
    author: "Vikram Singh",
    authorRole: "Hospitality & Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "August 22, 2026",
    readTime: "6 min",
    category: "Hospitality",
    image: "/assets/blog/best-boutique-hotel-in-puri-for-jhulana-jatra.jpg",
    excerpt:
      "There's a particular kind of magic that settles over Puri in the last week of Shravan. The monsoon clouds hang low over the Bay of Bengal, the air smells faintly of rain and marigold, and inside the Jagannath Temple, something gentler than Rath Yatra's roar is taking place — Lord Jagannath, along with Balabhadra and Subhadra, is placed on a flower-decked swing and gently rocked, evening after evening, for seven days. This is Jhulana Jatra, and for devotees who've experienced it, it's one of the most quietly beautiful festivals on the Puri calendar.",
    content: `

      <p>If you're planning to be in Puri for Jhulana Yatra, where you stay matters more than it might for an ordinary trip. This guide covers what the festival actually involves, when it falls in 2026, and why Victoria Grand Hotel has become a boutique favorite for devotees making the journey.</p>

      <h2>What Is Jhulana Jatra, and Why Does It Matter?</h2>
      <p>Jhulana Jatra Puri is the swing festival of Lord Jagannath, celebrated over seven days from Shravana Shukla Dashami to Pratipada, culminating on Shravan Purnima — also known as Gamha Purnima. In 2026, the festival runs from August 22 to August 28.</p>
      <p>Each evening during this period, the utsav vighraha (festival deities) — Sri Madanmohan, representing Lord Jagannath, along with Goddess Lakshmi and Vishwadhatri — are placed on an ornately decorated wooden swing at the Muktimandap inside the temple. Devotees gather to watch, sing, and take part in the gentle act of pushing the swing, said to be a way of intimately serving the Lord during the monsoon season, when the divine is believed to descend and enjoy the cool of the rains.</p>
      <p>It's a smaller, more intimate festival than Rath Yatra — no chariots, no crowds pulling ropes through the streets — which is exactly what draws a certain kind of devotee to it. The evenings are unhurried, the temple atmosphere is devotional rather than frenetic, and the whole town settles into a rhythm built around darshan, prasad, and quiet reflection.</p>

      <h2>Where to Stay in Puri During Jhulana Jatra</h2>
      <p>Puri sees a genuine rise in footfall during Jhulana Yatra, particularly in the days building up to Purnima, so booking a hotel near Jagannath Temple Puri well in advance is worth doing rather than leaving until the last week. A few things are worth prioritizing when choosing where to stay:</p>
      <ul>
        <li class="mb-3"><strong>Proximity to the temple:</strong> Evening darshan during Jhulana Jatra often means heading out after sunset and returning late, so a short walk beats a long drive through festival-season traffic.</li>
        <li class="mb-3"><strong>A boutique, personal feel over a large commercial setup:</strong> Devotees visiting for a specific festival tend to want a calmer, more attentive stay rather than a sprawling hotel handling hundreds of unrelated guests.</li>
        <li class="mb-3"><strong>Genuine comfort after long days at the temple:</strong> Festival days involve a lot of walking, standing, and queuing, so a restful room at the end of it matters more than usual.</li>
        <li class="mb-3"><strong>Local knowledge:</strong> Staff who understand the temple's festival-specific timings and rituals can save visitors real confusion, especially first-time devotees unfamiliar with Jhulana Jatra's schedule.</li>
      </ul>

      <h2>Why Victoria Grand Hotel Is the Best Boutique Hotel in Puri for Jhulana Jatra</h2>
      <p><a href="https://www.hotelvictoriagrand.com/" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Victoria Grand</a> Hotel Puri sits on Chandan Hazuri Road, close enough to the Jagannath Temple that reaching evening darshan during Jhulana Jatra is a short, unhurried walk rather than a planned outing. For festival visitors, that proximity alone changes the entire rhythm of the stay — no worrying about traffic snarls or finding late-night transport back after the swing rituals conclude.</p>
      <p>What sets <a href="https://www.hotelvictoriagrand.com/about" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Victoria Grand</a> apart as a boutique hotel Puri devotees keep returning to isn't scale, it's attention. The property is built around a smaller, more personal guest experience — comfortable, well-appointed rooms, a rooftop restaurant with sea views for a calm meal after a long day of darshan, and a team genuinely familiar with temple timings, festival schedules, and what first-time visitors need to know before heading out.</p>
      <p>A few things that make it a fit specifically for Jhulana Jatra:</p>
      <ul>
        <li class="mb-3"><strong>Walking distance to the temple:</strong> Ideal for the evening darshan schedule the festival is built around.</li>
        <li class="mb-3"><strong>A boutique, unhurried atmosphere:</strong> In contrast to the larger commercial hotels that can feel impersonal during peak festival weeks.</li>
        <li class="mb-3"><strong>Rooftop dining with sea views:</strong> A quiet way to unwind after the day's rituals.</li>
        <li class="mb-3"><strong>Staff familiar with festival logistics:</strong> Able to guide devotees on darshan timings and temple etiquette specific to Jhulana Yatra.</li>
        <li class="mb-3"><strong>Comfortable, well-maintained rooms:</strong> Giving tired pilgrims a genuine place to rest rather than just a bed to fall into.</li>
      </ul>
      <p>For devotees comparing hotels near Jagannath Temple Puri for this particular festival, <a href="https://www.hotelvictoriagrand.com/contact" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Victoria Grand's</a> combination of location, scale, and hospitality is what tends to make the difference between a rushed festival visit and one that actually leaves room for the experience to sink in.</p>

      <h2>Planning Your Jhulana Jatra Trip</h2>
      <p>A few practical notes worth keeping in mind if you are planning a Puri visit around this festival:</p>
      <ul>
        <li class="mb-3"><strong>Book early:</strong> Rooms at well-located boutique properties fill up in the weeks before Purnima, particularly for the final two or three days of the festival.</li>
        <li class="mb-3"><strong>Plan for evening darshan:</strong> The swing rituals typically take place in the evening, so build your day around being at the temple after sunset rather than only in the morning.</li>
        <li class="mb-3"><strong>Dress appropriately:</strong> As with any Jagannath Temple visit, modest, traditional clothing is expected, and phones and leather items aren't permitted inside.</li>
        <li class="mb-3"><strong>Give yourself more than one evening:</strong> Since the festival runs across seven days, staying for at least two or three lets you experience more than a single, rushed darshan.</li>
      </ul>

      <h2>Beyond the Temple</h2>
      <p>Jhulana Jatra falls at a genuinely beautiful time of year in Puri. The monsoon keeps the coast lush and green, Puri Beach has a quieter, moodier atmosphere than the peak tourist months, and the town itself feels less like a destination and more like a place actively observing something sacred. Visitors with extra time can take in Pipili's applique craft villages or the Konark Sun Temple, both an easy day trip away, though most devotees find the festival itself — and the evenings at the temple — reason enough to stay close and simply be present.</p>

      <h2>Final Thoughts</h2>
      <p>Jhulana Jatra doesn't have the scale or spectacle of Rath Yatra, and that's precisely its appeal — a quieter, more devotional week built around evenings at the temple rather than crowds in the streets. Choosing a comfortable, well-located boutique hotel in Puri for the festival, like Victoria Grand Hotel, means those evenings are unhurried from the moment you step out the door to the moment you return to rest.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div class="faq-section space-y-4">
        <p><strong>1. What is Jhulana Jatra, and when does it take place?</strong><br/>
        Jhulana Jatra is the swing festival of Lord Jagannath, celebrated over seven days from Shravana Shukla Dashami to Pratipada, ending on Shravan Purnima. In 2026, the festival runs from August 22 to August 28.</p>

        <p><strong>2. Is Jhulana Jatra as crowded as Rath Yatra?</strong><br/>
        No. It draws devotees, but the atmosphere is far calmer and more intimate than Rath Yatra, with no chariots or street processions involved.</p>

        <p><strong>3. Where is the best place to stay in Puri during Jhulana Jatra?</strong><br/>
        A boutique hotel near Jagannath Temple Puri makes the most sense for festival visitors, since evening darshan means walking to and from the temple after dark. Victoria Grand Hotel, close to the temple on Chandan Hazuri Road, is built for exactly this kind of stay.</p>

        <p><strong>4. How far is Victoria Grand Hotel from the Jagannath Temple?</strong><br/>
        Victoria Grand Hotel Puri is a short walk from the temple around 1 km, making it easy to reach evening darshan during Jhulana Jatra without relying on transport through festival traffic.</p>

        <p><strong>5. Do I need to book hotels in Puri in advance for Jhulana Jatra?</strong><br/>
        Yes. Rooms at well-located boutique properties fill up in the days leading up to Purnima, so booking several weeks ahead is recommended.</p>

        <p><strong>6. What should I wear to the temple during Jhulana Jatra?</strong><br/>
        The same dress code applies as any other Jagannath Temple visit — modest, traditional clothing, with phones, cameras, and leather items left outside the temple premises.</p>

        <p><strong>7. Is Victoria Grand Hotel suitable for families visiting for the festival?</strong><br/>
        Yes. The hotel's boutique setting, comfortable rooms, and proximity to the temple make it a practical, restful choice for families attending Jhulana Jatra together.</p>
      </div>
    `,
  },
  "jagannath-temple-puri-darshan-guide": {
    title:
      "Jagannath Temple Puri Darshan Guide: Everything First-Time Visitors Should Know",
    author: "Vikram Singh",
    authorRole: "Hospitality & Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "August 17, 2026",
    readTime: "7 min",
    category: "Heritage",
    image: JAGANNATH_TEMPLE_IMAGE,
    excerpt:
      "There's a moment that catches most first-time visitors off guard. You step off the train or out of your cab, the salt air from the Bay of Bengal still on your skin, and somewhere ahead the spire of the Jagannath Temple rises over Puri's rooftops. It doesn't look like a photograph anymore. It looks like something you're about to be part of.",
    content: `
      <blockquote class="italic text-xl font-serif text-ochre border-l-4 border-ochre pl-4 my-6 font-semibold">
        "There's a moment that catches most first-time visitors off guard. You step off the train or out of your cab, the salt air from the Bay of Bengal still on your skin, and somewhere ahead the spire of the Jagannath Temple rises over Puri's rooftops. It doesn't look like a photograph anymore. It looks like something you're about to be part of."
      </blockquote>

      <p>Planning a Jagannath Temple Puri darshan is different from visiting most other landmarks in India. This isn't a monument you walk around at your own pace with a guidebook in hand — it's a living temple with its own rhythm, its own rules, and its own centuries-old rituals that continue exactly as they have for generations. Knowing what to expect before you arrive makes the difference between standing confused at a gate and walking in prepared, unhurried, and ready to actually experience it.</p>

      <p>This guide covers what every first-time visitor to the Puri Jagannath Temple needs to know: timings, entry rules, dress code, and the practical details that rarely make it into the standard travel brochure.</p>

      <h2>A Quick Orientation to the Temple</h2>
      <p>The Jagannath Temple in Puri is one of the four sacred Char Dham sites of Hindu pilgrimage, dedicated to Lord Jagannath, along with his siblings Lord Balabhadra and Goddess Subhadra. The temple's soaring main spire has watched over Puri for centuries, and the town itself has grown up around it — every lane, market, and guesthouse orbits this one sacred centre.</p>
      <p>For most of the year, darshan is a matter of joining the flow of pilgrims through the temple's ritual schedule. Once a year, during Rath Yatra, the deities leave the sanctum entirely and are pulled through the streets on massive wooden chariots, in one of the largest religious processions on earth.</p>

      <h2>Jagannath Temple Timings: What to Actually Expect</h2>
      <p>The temple gates open at 5:00 AM and the last rituals conclude around 11:00 PM, but this doesn't mean darshan runs continuously through the day. The deities follow a fixed schedule of aartis, bhog offerings, and private rituals, and the inner sanctum closes to visitors during several windows through the day — sometimes for thirty minutes, sometimes closer to an hour.</p>
      <p>This is the detail that trips up most first-timers. Arrive in the middle of an offering window without knowing it, and you could find yourself waiting at the inner gate with no clear sense of when it will reopen.</p>
      <p>Two windows tend to work best for a calmer darshan:</p>
      <ul>
        <li class="mb-3"><strong>Early morning, between 5:30 AM and 8:30 AM:</strong> Before the day's crowds build, with the temple at its most peaceful.</li>
        <li class="mb-3"><strong>Late evening, around 9:30 PM:</strong> For the Badashringara Vesha, when the deities are dressed in their most elaborate form for the final darshan of the day and the crowds have largely thinned.</li>
      </ul>
      <p>If your schedule allows it, building your Puri temple visit around one of these two windows is the single best piece of advice for a smoother experience.</p>

      <h2>Jagannath Temple Rules for Visitors</h2>
      <p>The Jagannath Temple's rules exist to protect the sanctity of a space that has functioned continuously for centuries, and temple authorities have grown stricter about enforcing them in recent years.</p>
      <ul>
        <li class="mb-3"><strong>Entry is restricted to Hindus:</strong> This is the temple's longest-standing tradition, and it's rigorously observed. Non-Hindu visitors are not permitted into the main temple complex. The one exception is Rath Yatra, when the deities are brought out onto Grand Road and everyone, regardless of faith, can witness the procession.</li>
        <li class="mb-3"><strong>Phones, cameras, and leather items stay outside:</strong> Mobile phones, cameras, leather wallets, and belts are not allowed inside the temple premises. Cloak rooms near the entrance let you store these safely before heading in — plan for a few extra minutes here, especially during busier hours.</li>
        <li class="mb-3"><strong>A new queue system is now in place:</strong> Since the start of 2025, the temple has introduced a structured queue line for darshan, with entry through designated gates and separate exit points to manage the flow of visitors. It's a welcome change from the older, less predictable crowding, though it does mean following the marked route rather than wandering freely.</li>
        <li class="mb-3"><strong>Keep the inner sanctum quiet:</strong> Loud conversation, screaming or fighting among themselves, and casual behaviour near the deities are frowned upon. This is a place of active worship, not a tourist site, and the atmosphere inside reflects that.</li>
      </ul>

      <h2>Jagannath Temple Dress Code</h2>
      <p>Dress rules have tightened in recent years, and gate security in 2026 is noticeably stricter about enforcing them than it once was.</p>
      <ul>
        <li class="mb-3"><strong>Men:</strong> Dhoti or kurta-pajama is traditional and always welcome. Full-length trousers are acceptable; shorts are not.</li>
        <li class="mb-3"><strong>Women:</strong> Sarees or salwar kameez or dresses with full coverage are expected. Sleeveless tops, short skirts, and ripped or revealing clothing aren't permitted.</li>
        <li class="mb-3"><strong>Footwear:</strong> Footwear comes off before the temple threshold, so wear something easy to slip on and off.</li>
      </ul>
      <p>There's no ticket counter checking outfits at the door, but visitors turned away for clothing violations are a real and avoidable inconvenience. Packing a simple cotton kurta or saree for darshan day saves the hassle entirely.</p>

      <h2>Planning Your Visit Around the Temple</h2>
      <p>General darshan at the Jagannath Temple is completely free, with no entry ticket required. Special sevas or private puja bookings do involve a fee, and it's worth checking the temple's official channels for current rates before you travel, since these details change from season to season.</p>
      <p>Where you stay matters more than most visitors expect. The lanes around the temple can get genuinely crowded during peak hours and festival days, and having a short, walkable distance between your hotel and the temple gates changes the whole rhythm of your trip — you're not racing traffic for a 5:30 AM darshan, you're simply stepping out the door.</p>
      <p>This is where a stay like <a href="https://www.hotelvictoriagrand.com/" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Hotel Victoria Grand</a>, on Chandan Hazuri Road just about a kilometre from the temple, tends to make an unplanned kind of sense. Guests heading out for an early-morning darshan can do so on foot, and the <a href="https://www.hotelvictoriagrand.com/about" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">hotel's concierge and travel desk</a> are used to helping first-time visitors understand the queue system, timing windows, and dress expectations before they set off — small guidance that saves a lot of confusion at the gate. After darshan, the rooftop Restaurant is <a href="https://www.hotelvictoriagrand.com/contact" class="text-ochre hover:underline font-semibold" target="_blank" rel="noopener noreferrer">a quiet place to sit</a> with a coffee and let the morning settle in, with the Bay of Bengal visible just beyond the rooftops.</p>
      <p>For pilgrims interested in Mahaprasad — the temple's famous communal offering, prepared in what's considered the largest kitchen in the world — it's worth building in time to visit Anand Bazar near the temple, where the prasad is distributed on a donation basis.</p>

      <h2>Beyond the Temple</h2>
      <p>Puri rewards visitors who give it more than a single day. The golden sands of Puri Beach are a short walk from the temple and worth an early morning or sunset visit. Pipili and Raghurajpur, about 25 km away, are known for their centuries-old applique craft, and the Konark Sun Temple — a UNESCO World Heritage Site shaped like a colossal stone chariot — makes for an easy half-day trip. Chilika Lake, roughly 50 km out, offers boat rides to spot Irrawaddy dolphins for those extending their stay.</p>
      <p>None of these compete with the temple for significance, but together they round out what a Puri trip can be: part pilgrimage, part coastal escape.</p>

      <h2>Final Thoughts</h2>
      <p>A first visit to the Jagannath Temple works best when you treat it less like sightseeing and more like joining something already in motion. Time your darshan around the ritual windows, dress with the temple's traditions in mind, leave your phone behind, and give yourself room to simply be present once you're inside. The rest — the queues, the heat, the crowds — tends to matter far less once you're standing there.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div class="faq-section space-y-4">
        <p><strong>1. What are the Jagannath Temple timings for darshan?</strong><br/>
        The temple opens at 5:00 AM and closes around 11:00 PM, but darshan pauses during bhog offerings and rituals throughout the day. The calmest windows are early morning (5:30–8:30 AM) and late evening around 9:30 PM for the Badashringara Vesha.</p>

        <p><strong>2. Is there an entry fee for Jagannath Temple darshan?</strong><br/>
        No. General darshan is free, with no entry ticket required. Special sevas or private puja bookings may involve a fee, which is worth confirming through official temple channels before your visit.</p>

        <p><strong>3. Can non-Hindus visit the Jagannath Temple?</strong><br/>
        Entry to the main temple complex is restricted to Hindus, a long-standing temple tradition. The one exception is Rath Yatra, when the deities are brought out onto Grand Road and everyone, regardless of faith, can witness the procession.</p>

        <p><strong>4. What is the dress code for Jagannath Temple?</strong><br/>
        Men and Women are expected to wear full length clothes. Shorts, ripped jeans, sleeveless tops and short skirts or any inappropriate attires aren't permitted. Footwear must be removed before entering.</p>

        <p><strong>5. Are phones and cameras allowed inside the temple?</strong><br/>
        No. Mobile phones, cameras, and leather items such as wallets and belts or any electric gadgets must be left outside. Cloak rooms are available near the entrance for safe storage.</p>

        <p><strong>6. How far is Jagannath Temple from the main hotels in Puri?</strong><br/>
        Most hotels in Puri are within a couple of kilometres of the temple. Hotel Victoria Grand, for instance, is about 1 km away on Chandan Hazuri Road, making an early-morning darshan an easy walk rather than a planned outing.</p>

        <p><strong>7. What is Mahaprasad, and where can I try it?</strong><br/>
        Mahaprasad is the sacred food offering prepared in the temple's kitchen, one of the largest in the world, and served without onion or garlic according to tradition. It's distributed at Anand Bazar inside the temple premise.</p>
      </div>
    `,
  },
  "blue-flag-beach-vs-golden-beach-puri": {
    title:
      "Blue Flag Beach vs Golden Beach: Which One Should You Visit in Puri?",
    author: "Vikram Singh",
    authorRole: "Hospitality & Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "August 8, 2026",
    readTime: "7 min",
    category: "Travel",
    image: "/assets/blog/blue-flag-beach-vs-golden-beach-puri.png",
    excerpt:
      '"Every trip to Puri eventually leads to the sea. But when you hear people talking about Blue Flag Beach and Golden Beach, one question naturally comes to mind—aren\'t they the same? Not quite."',
    content: `
      <blockquote class="italic text-xl font-serif text-ochre border-l-4 border-ochre pl-4 my-6 font-semibold">
        "Every trip to Puri eventually leads to the sea. But when you hear people talking about Blue Flag Beach and Golden Beach, one question naturally comes to mind—aren't they the same?<br/>Not quite."
      </blockquote>

      <p>Puri is blessed with a stunning coastline that attracts pilgrims, families, couples, photographers, and beach lovers throughout the year. While both Blue Flag Beach and Golden Beach Puri lie along the same stretch of the Bay of Bengal, they offer distinctly different experiences.</p>

      <p>One is celebrated for its international standards of cleanliness, safety, and sustainability. The other is where the heart of Puri comes alive—with golden sands, lively evenings, local flavours, and generations of memories woven into every wave.</p>

      <p>So, which beach is better in Puri? The answer isn't about choosing a winner. It's about discovering which experience speaks to you—or better yet, why every traveller should make time for both.</p>

      <p>Whether you are planning a spiritual, a family vacation, or a relaxing seaside escape, this Puri beach comparison guide will help you understand the difference between Blue Flag Beach and Golden Beach, so you can make the most of your time in one of Odisha's most loved coastal destinations.</p>

      <h2>Blue Flag Beach: Where Nature Meets World-Class Standards</h2>
      <p>If your idea of a perfect beach is one that's peaceful, clean, and thoughtfully maintained, Blue Flag Beach Puri deserves a place on your itinerary.</p>
      <p>Recognized as the first Blue Flag certified beach in Odisha, this beach has earned international recognition for maintaining high standards of cleanliness, environmental conservation, visitor safety, and accessibility. The prestigious Blue Flag certification is awarded only to beaches that consistently meet strict global criteria, making it a symbol of sustainable tourism.</p>
      <p>The moment you step inside, you will notice the difference. Clean walkways, changing rooms, washrooms, seating areas, trained lifeguards, and designated recreational zones create an experience that's both relaxing and well-organized.</p>
      <p>Unlike crowded beaches where finding a peaceful corner can be difficult, Blue Flag Beach encourages visitors to slow down. It's the kind of place where families can comfortably spend an afternoon, couples can enjoy uninterrupted walks, and solo travellers can simply sit by the waves with a book in hand.</p>
      <p>If you have been wondering, "Is Blue Flag Beach worth visiting?", the answer is yes—especially if you value comfort, cleanliness, and a calm atmosphere.</p>
      <p><strong>Blue Flag Beach Puri Timings:</strong> The beach is generally open from 5 o’ clock in the morning until 10 pm, though timings may vary depending on local regulations.</p>
      <p><strong>Blue Flag Beach Puri Entry Fee:</strong> Visitors are usually required to pay a nominal entry fee, which contributes towards maintaining its world-class facilities and cleanliness.</p>

      <h2>Golden Beach: The Soul of Coastal Puri</h2>
      <p>If Blue Flag Beach is calm and refined, Golden Beach is lively, colourful, and unmistakably Puri.</p>
      <p>Often referred to as Sea Beach Puri, this iconic stretch of coastline has welcomed travellers for decades. It's where early mornings begin with fishermen returning from the sea, children chase waves with endless excitement, and evenings come alive with families enjoying the cool breeze.</p>
      <p>Walk along the shoreline and you will find local vendors serving freshly prepared snacks, artisans selling handcrafted souvenirs, and visitors gathering to watch the sky transform into brilliant shades of orange and pink as the sun sets over the Bay of Bengal.</p>
      <p>There's no rush here.</p>
      <p>People pause to sip coconut water, enjoy local delicacies, listen to the sound of the waves, and simply embrace the slower rhythm of life.</p>
      <p>If you are looking for an authentic Golden Beach Puri travel guide, here's the best advice: arrive without a schedule. Some of the most memorable moments happen when you simply let the beach surprise you.</p>

      <h2>Blue Flag Beach vs Golden Beach: What's the Difference?</h2>
      <p>Although both beaches share the same coastline, they offer very different experiences.</p>
      <p>Blue Flag Beach is designed for travellers who appreciate organised spaces, clean surroundings, and a quieter environment. Its internationally recognised standards make it one of the cleanest beaches in Puri, making it particularly popular with families, couples, senior travellers, and visitors looking for a peaceful escape from the city's bustle.</p>
      <p>Golden Beach, on the other hand, is where you will experience the everyday charm of Puri. The atmosphere is livelier, the shoreline is filled with local culture, and the beach offers a wonderful opportunity to enjoy regional food, interact with local vendors, and witness the city's vibrant coastal life.</p>
      <p>So, which beach is cleaner in Puri? Blue Flag Beach undoubtedly stands out for its exceptional maintenance and sustainability practices.</p>
      <p>But if you're asking which beach is better in Puri, there isn't a single right answer.</p>
      <p>Choose Blue Flag Beach if you're looking for serenity, beautifully maintained surroundings, and uninterrupted moments by the sea.</p>
      <p>Choose Golden Beach if you want to experience the culture, flavours, and lively spirit that have made Puri's coastline so beloved by generations of travellers.</p>
      <p>In reality, they're not competing with each other—they simply offer two different ways to experience the same beautiful city.</p>

      <h2>Which Beach is Better for Families?</h2>
      <p>Families often look for beaches that are safe, comfortable, and enjoyable for every age group.</p>
      <p>In that regard, Blue Flag Beach Puri has a slight advantage.</p>
      <p>Its organised facilities, clean environment, trained lifeguards, and accessible pathways make it one of the best beaches in Puri for families. Parents can relax while children enjoy the shoreline, and elderly visitors appreciate the well-maintained surroundings.</p>
      <p>Golden Beach is equally enjoyable for families who love lively destinations. From local snacks to souvenir shopping and evening walks, it offers an experience that's energetic, entertaining, and uniquely Puri.</p>

      <h2>Can You Visit Both Beaches in One Day?</h2>
      <p>Absolutely—and that's one of the best parts about visiting Puri.</p>
      <p>Since Blue Flag Beach and Golden Beach are located close to each other, you don't have to choose one over the other.</p>
      <p>A simple itinerary could look like this:</p>
      <ul>
        <li class="mb-3">Start your morning with blessings at the Jagannath Temple.</li>
        <li class="mb-3">Enjoy a relaxed lunch featuring authentic Odia cuisine.</li>
        <li class="mb-3">Spend your afternoon unwinding at Blue Flag Beach, soaking in its peaceful atmosphere.</li>
        <li class="mb-3">As the evening approaches, head towards Golden Beach to watch the sunset, enjoy local snacks, browse beachside stalls, and experience the vibrant energy that defines coastal Puri.</li>
      </ul>
      <p>It's the perfect balance of spirituality, relaxation, and local culture—all in a single day.</p>

      <h2>Stay Close to Puri's Most Loved Beaches</h2>
      <p>When planning a beach holiday, choosing the right location can transform your entire experience.</p>
      <p>Instead of spending your time travelling between attractions, staying close to both the coastline and the city's spiritual landmarks allows you to experience Puri at a relaxed pace.</p>
      <p>Victoria Grand is thoughtfully located between the Jagannath Temple and Puri's famous beaches, making it a convenient base for travellers who want to explore both Blue Flag Beach and Golden Beach with ease.</p>
      <p>After a morning of temple visits or an evening spent watching the waves, returning to elegant rooms, warm hospitality, and modern comforts allows you to unwind and prepare for another memorable day in the city.</p>
      <p>Whether you're travelling with family, your partner, or on a solo spiritual retreat, the right stay turns a good vacation into an unforgettable one.</p>

      <h2>Final Thoughts</h2>
      <p>If someone asks you, "Which is the best beach in Puri?", don't be too quick to answer.</p>
      <p>Because the beauty of Puri isn't found in choosing one beach over another. It's found in experiencing both.</p>
      <p>Spend one morning listening to nothing but the rhythm of the waves at Blue Flag Beach.</p>
      <p>Spend another evening watching children laugh, vendors call out to visitors, and the sky glows in shades of gold at Golden Beach.</p>
      <p>One beach offers peace.</p>
      <p>The other offers personality.</p>
      <p>Together, they capture everything that makes Puri Tourism so unforgettable.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div class="faq-section space-y-4">
        <p><strong>1. Is Blue Flag Beach different from Golden Beach in Puri?</strong><br/>
        Yes. Blue Flag Beach is internationally certified for cleanliness, safety, and sustainability, while Golden Beach is known for its vibrant atmosphere, local food, and traditional beach experience.</p>
        
        <p><strong>2. Which beach is cleaner in Puri?</strong><br/>
        Blue Flag Beach is considered the cleanest beach in Puri because it follows international Blue Flag standards for cleanliness, environmental management, and visitor safety.</p>

        <p><strong>3. What is the entry fee for Blue Flag Beach Puri?</strong><br/>
        Blue Flag Beach generally charges a nominal entry fee (Rs.20-50)  to help maintain its facilities. Visitors should check the latest fee before planning their trip.</p>

        <p><strong>4. Which beach is best for families in Puri?</strong><br/>
        Blue Flag Beach is widely regarded as one of the best beaches in Puri for families due to its clean surroundings, lifeguards, and well-maintained facilities. Golden Beach is also a great option for families who enjoy a more lively atmosphere.</p>

        <p><strong>5. Which beach is best for couples?</strong><br/>
        Couples seeking a peaceful and scenic setting often prefer Blue Flag Beach, while Golden Beach is perfect for those who enjoy lively evenings, local food, and cultural experiences.</p>

        <p><strong>6. Can I visit Blue Flag Beach and Golden Beach on the same day?</strong><br/>
        Yes. Since both beaches are located close to each other, many travellers explore Blue Flag Beach during the day and enjoy the sunset and local attractions at Golden Beach in the evening.</p>

        <p><strong>7. Which beach is closer to Jagannath Temple?</strong><br/>
        Both Blue Flag Beach and Golden Beach are conveniently accessible from the Jagannath Temple area, making them easy to include in the same itinerary.</p>
      </div>
    `,
  },
  "post-ratha-yatra-travel-guide-puri": {
    title:
      "Your Post-Ratha Yatra Travel Guide: Boutique Stays, Beaches & Temple Experiences",
    author: "Vikram Singh",
    authorRole: "Hospitality & Travel Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "July 28, 2026",
    readTime: "7 min",
    category: "Travel",
    image: "/assets/blog/post-ratha-yatra-travel-guide-puri.png",
    excerpt:
      '"The chariots may have returned to the temple, but Puri still has countless stories waiting to be discovered." Discover post-festival serenity, shorter temple queues, and boutique luxury in Puri.',
    content: `
      <blockquote class="italic text-xl font-serif text-ochre border-l-4 border-ochre pl-4 my-6 font-semibold">
        "The chariots may have returned to the temple, but Puri still has countless stories waiting to be discovered."
      </blockquote>

      <p>For many travellers, Puri is synonymous with the magnificent Ratha Yatra. Every year, millions gather to witness Lord Jagannath's grand procession, making the city one of India's most unforgettable pilgrimage destinations. But once the celebrations conclude, Puri transforms into something even more special—a peaceful coastal town where spirituality, heritage, and nature come together in perfect harmony.</p>

      <p>If you're looking for a post Ratha Yatra travel guide to Puri, this is one of the best times to explore the city. The temple queues are shorter, the beaches are less crowded, and you have the freedom to experience Puri at your own pace. Whether you're planning a family holiday, a spiritual retreat, or a relaxing weekend by the sea, here's everything you need to know before you visit Puri.</p>

      <h2>Why Visit Puri After Ratha Yatra?</h2>
      <p>There's a unique charm in seeing a destination after its biggest celebration. The festive energy lingers in the air, yet the city feels calmer and more welcoming.</p>
      <p>The quieter atmosphere allows you to enjoy peaceful darshan at the Jagannath Temple, spend unhurried evenings at Puri Beach, explore local markets, and discover Odisha's rich cultural heritage without feeling rushed. For travellers interested in spiritual tourism in Puri, the post-festival season offers a more meaningful connection with the city's traditions and everyday life.</p>
      <p>Sometimes, the most memorable journeys aren't the busiest ones—they're the ones where you have time to pause, observe, and truly experience a place.</p>

      <h2>Seek Blessings at the Jagannath Temple</h2>
      <p>No Puri vacation is complete without visiting the revered Jagannath Temple. One of the Char Dham pilgrimage sites, the temple continues to draw devotees throughout the year.</p>
      <p>After Ratha Yatra, visitors often enjoy a more relaxed temple experience. You can spend time appreciating the magnificent architecture, witnessing daily rituals, and soaking in the spiritual atmosphere that defines Sacred Puri.</p>
      <p>Whether you're travelling with elderly parents, introducing your children to Odisha's spiritual heritage, or just seeking a moment of reflection, the temple offers an experience that stays with you long after your journey ends.</p>

      <h2>Unwind Along Puri Beach</h2>
      <p>After the spiritual serenity of the temple, head towards the calming shores of Puri Beach.</p>
      <p>There's something incredibly soothing about watching the waves roll in while the salty breeze carries away the fatigue of everyday life. Wake up early to witness a stunning sunrise over the Bay of Bengal, or spend your evening enjoying local snacks as children play along the shoreline.</p>
      <p>Choosing a Puri beach hotel or a boutique stay in Puri near Puri Beach allows you to enjoy these moments whenever you wish. Sometimes, luxury isn't measured by extravagant experiences—it's found in peaceful mornings, beautiful sunsets, and the sound of waves outside your window.</p>

      <h2>Explore Beyond the Famous Landmarks</h2>
      <p>While the Jagannath Temple and Puri Beach are the city's biggest attractions, there are several other places worth adding to your itinerary.</p>
      <p>A visit to Raghurajpur Heritage Village introduces you to Odisha's celebrated Pattachitra art and traditional handicrafts, where every home reflects generations of artistic excellence.</p>
      <p>For those seeking tranquillity, Narendra Pokhari offers a serene environment steeped in religious significance, while Golden Beach provides a clean and picturesque stretch of coastline ideal for leisurely walks and family outings.</p>
      <p>Exploring these destinations helps you discover a richer side of Puri tourism, where culture, craftsmanship, and spirituality coexist beautifully.</p>

      <h2>A Simple Two-Day Post-Ratha Yatra Itinerary</h2>
      <p>If you're wondering about the best things to do in Puri after Ratha Yatra, here's a balanced itinerary.</p>
      <ul>
        <li class="mb-3"><strong>Day 1:</strong> Begin with an early morning darshan at the Jagannath Temple. Later, explore the local markets known for seashell crafts, khaja (a traditional sweet), and traditional souvenirs. End your day with a peaceful sunset walk along Puri Beach.</li>
        <li class="mb-3"><strong>Day 2:</strong> Visit Raghurajpur Heritage Village to witness local artisans at work. Spend the afternoon at Golden Beach before enjoying a relaxed evening with authentic Odia cuisine.</li>
      </ul>
      <p>This itinerary lets you experience the city's spiritual, cultural, and coastal attractions without feeling rushed.</p>

      <h2>Choosing the Right Stay in Puri</h2>
      <p>Where you stay plays an important role in determining your travel experience.</p>
      <p>After a day spent exploring temples, beaches, and heritage sites, returning to a peaceful and comfortable hotel allows you to truly relax.</p>
      <p>If you're wondering where to stay in Puri after Ratha Yatra, consider a property that offers:</p>
      <ul>
        <li class="mb-2">Easy access to both the Jagannath Temple and Puri Beach</li>
        <li class="mb-2">Spacious, well-appointed rooms</li>
        <li class="mb-2">Modern amenities for a comfortable stay</li>
        <li class="mb-2">Warm, personalised hospitality</li>
        <li class="mb-2">A peaceful environment suitable for families, couples, and pilgrims</li>
      </ul>
      <p>A thoughtfully designed family hotel in Puri ensures travellers of every age enjoy a memorable holiday.</p>

      <h2>Experience Boutique Luxury at Victoria Grand</h2>
      <p>A memorable destination deserves an equally memorable stay.</p>
      <p>Victoria Grand offers a boutique hospitality experience that combines refined comfort with personalised service. Designed for travellers who appreciate elegant interiors, modern amenities, and a welcoming atmosphere, the property provides an ideal base for exploring Puri's spiritual and coastal attractions.</p>
      <p>Its convenient location makes it easy to visit both the Jagannath Temple and Puri Beach, allowing guests to make the most of their time in the city without long commutes. Whether you're searching for the best boutique hotel near Jagannath Temple, a luxury hotel near Jagannath Temple, or a hotel in Puri with modern amenities, Victoria Grand offers a stay where comfort and thoughtful hospitality come together effortlessly.</p>
      <p>More than just a place to sleep, it's a space where every journey finds the perfect ending after a day of exploration.</p>

      <h2>Final Thoughts</h2>
      <p>Puri is more than a destination marked on a map—it's an experience that gently stays with you.</p>
      <p>The days after Ratha Yatra reveal a calmer, more authentic side of the city, making it one of the finest times to explore Odisha's spiritual capital. Whether you're planning a short getaway or an extended Puri holiday, choosing the right itinerary and a comfortable boutique stay can make all the difference.</p>
      <p>So, when you're ready to explore Puri after Ratha Yatra, let your journey be about more than sightseeing. Let it be about creating meaningful memories—with your loved ones, with the city, and with yourself.</p>

      <h2>Frequently Asked Questions (FAQs)</h2>
      <div class="faq-section space-y-4">
        <p><strong>1. Is it a good time to visit Puri after Ratha Yatra?</strong><br/>
        Yes. The weeks following Ratha Yatra offer a quieter and more relaxed atmosphere. Visitors can enjoy easier temple access, less crowded beaches, and a more peaceful sightseeing experience.</p>
        
        <p><strong>2. Where should I stay in Puri after Ratha Yatra?</strong><br/>
        Choose accommodation that offers convenient access to both the Jagannath Temple and Puri Beach. Boutique hotels like Victoria Grand provide modern comforts, personalised hospitality, and a peaceful stay.</p>

        <p><strong>3. Which is the best boutique hotel in Puri near Jagannath Temple?</strong><br/>
        If you're looking for comfort, elegant interiors, and easy connectivity to major attractions, Victoria Grand is an excellent boutique stay for both pilgrims and leisure travellers.</p>

        <p><strong>4. What are the best places to visit in Puri besides Jagannath Temple?</strong><br/>
        Raghurajpur Heritage Village, Golden Beach, Narendra Pokhari, local markets, and the nearby coastline are among the most popular attractions beyond the temple.</p>

        <p><strong>5. How many days are enough for a Puri vacation?</strong><br/>
        A two to three-day trip is ideal for exploring the Jagannath Temple, Puri Beach, cultural attractions, local cuisine, and nearby heritage sites at a comfortable pace.</p>

        <p><strong>6. Is Puri a good destination for a family holiday?</strong><br/>
        Absolutely. Puri offers family-friendly beaches, cultural attractions, spiritual experiences, local shopping, and comfortable accommodation suitable for travellers of all ages.</p>

        <p><strong>7. What should I look for when choosing a hotel in Puri?</strong><br/>
        Look for a hotel with modern amenities, convenient access to the beach and temple, excellent hospitality, spacious rooms, and a peaceful environment for a comfortable stay.</p>
      </div>
    `,
  },
  "jagannath-temple-spiritual-journey": {
    title: "The Spiritual Journey: Understanding Jagannath Temple",
    author: "Raj Kumar",
    authorRole: "Heritage Expert",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    date: "March 15, 2024",
    readTime: "8 min",
    category: "Heritage",
    image: JAGANNATH_TEMPLE_IMAGE,
    excerpt:
      "Explore the profound spiritual significance of one of India's most sacred pilgrimage sites and its cultural impact on Puri.",
    content: `
      <h2>The Sacred Journey Begins</h2>
      <p>The Jagannath Temple stands as one of the four most important pilgrimage sites in Hindu tradition. Located in the coastal city of Puri, Odisha, this ancient temple has captivated devotees and travelers for centuries with its spiritual energy and architectural magnificence.</p>
      
      <h2>Historical Significance</h2>
      <p>Dating back to the 12th century, the temple was constructed under the reign of King Anantavarman Chodaganga. The main temple tower, known as the Jagamohana, stands approximately 65 meters tall and is decorated with intricate carvings and sculptures that tell stories from Hindu scriptures.</p>
      
      <h2>The Divine Deities</h2>
      <p>The temple houses three main deities: Lord Jagannath (a form of Lord Krishna), his brother Balabhadra, and their sister Subhadra. These are not traditional idols but wooden representations carved and replaced every 12 to 19 years in a ritual known as the Nabakalebara.</p>
      
      <h2>The Grand Rath Yatra</h2>
      <p>Every summer, millions of devotees witness the spectacular Rath Yatra (Car Festival), where the deities are pulled in massive wooden chariots through the streets of Puri. This ancient ritual, believed to date back over 2,000 years, remains one of the world's largest religious processions.</p>
      
      <h2>Mahaprasad: The Sacred Offering</h2>
      <p>One of the temple's most significant traditions is the preparation and distribution of Mahaprasad - sanctified food prepared in the temple kitchens. This blessed offering is believed to be a part of the divine itself and is accepted by devotees regardless of caste or creed.</p>
      
      <h2>Spiritual Experience</h2>
      <p>Visiting the Jagannath Temple is not merely a sightseeing experience but a transformative spiritual journey. Pilgrims come seeking blessings, peace, and a deeper connection with the divine. The temple's atmosphere, filled with devotion and ancient traditions, creates a unique spiritual ambiance.</p>
    `,
  },
  "applique-art-odisha-craft": {
    title: "The Art of Appliqué: Odisha's Living Heritage",
    author: "Priya Sharma",
    authorRole: "Cultural Historian",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    date: "March 10, 2024",
    readTime: "6 min",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200",
    excerpt:
      "Discover the intricate technique of appliqué art and how artisans preserve this traditional craft for generations.",
    content: `
      <h2>Ancient Art Form</h2>
      <p>Appliqué is a traditional form of textile art that has been practiced in Odisha for centuries. This intricate craft involves cutting out designs from fabric and applying them onto a base fabric, creating layered, multicolored patterns that are visually stunning and culturally significant.</p>
      
      <h2>The Technique</h2>
      <p>The process begins with selecting high-quality fabrics in vibrant colors. Artisans carefully hand-cut designs depicting religious motifs, natural elements, and geometric patterns. These cutouts are then meticulously stitched onto a base fabric using traditional techniques passed down through generations.</p>
      
      <h2>Materials and Colors</h2>
      <p>Traditional appliqué uses natural dyes and cotton fabrics, though modern adaptations have introduced synthetic materials. The color palette typically features bold, contrasting hues - reds, yellows, blues, and greens - creating visually striking compositions that tell stories of cultural heritage.</p>
      
      <h2>Applications</h2>
      <p>Appliqué work adorns traditional garments, temple hangings, wall decorations, and festival banners. Each piece represents hours of meticulous handwork, with master artisans creating bespoke designs that reflect the wearer's taste and social status.</p>
      
      <h2>Preserving Tradition</h2>
      <p>Today, organizations and artisan cooperatives work tirelessly to keep this ancient art form alive. Victoria Grand celebrates this heritage by showcasing appliqué art throughout its premises and supporting local artisans through direct partnerships and fair-trade practices.</p>
      
      <h2>The Future</h2>
      <p>As younger generations embrace modern technology, the future of appliqué art lies in balancing tradition with innovation. Contemporary designers are reinterpreting classical patterns for modern audiences, ensuring that this beautiful heritage craft continues to thrive.</p>
    `,
  },
  "mahaprasad-spiritual-food": {
    title: "Mahaprasad: The Sacred Offering and Its Significance",
    author: "Amit Patel",
    authorRole: "Cuisine Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    date: "April 5, 2026",
    readTime: "5 min",
    category: "Cuisine",
    image: MAHAPRASAD_IMAGE,
    excerpt:
      "Learn about the spiritual and cultural importance of Mahaprasad, the blessed food offering from the Jagannath Temple.",
    content: `
      <h2>The Divine Blessing</h2>
      <p>Mahaprasad represents more than food - it embodies divine grace. Prepared daily in the temple kitchens of Jagannath, this sanctified food is offered first to the deities before being distributed to devotees. The act of consuming Mahaprasad is believed to purify the soul and grant blessings.</p>
      
      <h2>Preparation Process</h2>
      <p>The preparation of Mahaprasad follows strict rituals and guidelines established centuries ago. Cooked in massive earthen pots over open fires, the menu typically includes rice, lentils, vegetables, and ghee. Each element is chosen with spiritual intention and prepared with utmost reverence.</p>
      
      <h2>Universal Acceptance</h2>
      <p>One remarkable aspect of Mahaprasad is its universal acceptance. Regardless of caste, creed, or social status, all devotees receive the same blessed offering. This principle has made the temple a beacon of social equality and spiritual democracy.</p>
      
      <h2>Historical Significance</h2>
      <p>The tradition of Mahaprasad dates back over a thousand years. Historical records mention the temple's massive kitchen operations that could feed thousands daily - a remarkable feat of organization and devotion.</p>
    `,
  },
  "rath-yatra-route-puri-explained": {
    title: "Rath Yatra Route in Puri Explained: The Journey Along Bada Danda",
    author: "Raj Kumar",
    authorRole: "Heritage Expert",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    date: "July 15, 2026",
    readTime: "7 min",
    category: "Heritage",
    image: "/assets/images/spiritual-rath-yatra.png",
    excerpt:
      "Explore the 3-kilometre Bada Danda road, the sacred route of Puri's Rath Yatra connecting the Jagannath and Gundicha temples.",
    content: `
      <h2>The Route in One Line</h2>
      <p>The Rath Yatra route runs from the Jagannath Temple to the Gundicha Temple, entirely along a single ceremonial avenue called Bada Danda — the Grand Road. That's it. No side streets, no detours. One road, three chariots, one direction.</p>

      <h2>What Exactly Is Bada Danda?</h2>
      <p>Bada Danda translates literally to "Grand Road," and it earns the name. Stretching roughly 3 kilometres from the Singhadwara — the Lion's Gate of the Jagannath Temple — to the gates of the Gundicha Temple, it's been widened over the years to around 75 metres in places to handle the crowds. For 364 days of the year, it's simply Puri's main street: lined with shops, ashrams, dharamshalas, and homes, doing the ordinary business of a temple town. On Rath Yatra day, it becomes something else entirely — a river of people, chants, and colour, with three towering chariots moving through the middle of it.</p>

      <h2>Start Point: Singhadwara, Jagannath Temple</h2>
      <p>The journey begins at the Lion's Gate of the Jagannath Temple, the main entrance on the eastern side. This is where the deities — Lord Jagannath, Lord Balabhadra, and Devi Subhadra — are ceremonially brought out and placed in their respective chariots after the Pahandi ritual, a rhythmic, almost dance-like procession of carrying the idols. Before the chariots move an inch, the Gajapati King of Puri performs the Chhera Pahara, sweeping the chariot platforms with a golden broom. It's a small gesture with an enormous message: on this day, even royalty serves the divine, and every devotee pulling the ropes stands equal before it.</p>

      <h2>The Three Chariots and Their Order</h2>
      <p>Understanding the route also means understanding who travels in what order, because the chariots don't move as a single block:</p>
      <ul>
        <li class="mb-2"><strong>Taladhwaja</strong> — Lord Balabhadra's chariot, marked by a palm tree flag, typically leads the procession.</li>
        <li class="mb-2"><strong>Darpadalana</strong> — Devi Subhadra's chariot follows next.</li>
        <li class="mb-2"><strong>Nandighosha</strong> — Lord Jagannath's chariot, the largest of the three at around 45 feet tall with 16 wheels, brings up the final position.</li>
      </ul>
      <p>Each chariot is pulled by thousands of devotees on thick ropes, and the pace is unhurried by design — this is a journey meant to be felt, not rushed.</p>

      <h2>The Midpoint: Mausi Maa Temple</h2>
      <p>Roughly halfway along Bada Danda sits the Mausi Maa Temple, dedicated to Ardhasini, worshipped as Lord Jagannath's aunt. Tradition holds that the chariots pause here, and Lord Jagannath is offered Poda Pitha, a baked rice cake, as a mark of the deep familial affection this stop represents. For many devotees standing along the route, this is one of the most anticipated moments of the day — a brief pause in an otherwise slow, steady march toward Gundicha.</p>

      <h2>The End Point: Gundicha Temple</h2>
      <p>The route concludes at the Gundicha Temple, referred to as Lord Jagannath's "garden house" or aunt's home. Built in classic Kalinga Deula-style architecture and set within a walled garden, it stands at the opposite end of Bada Danda from the Jagannath Temple — a straight-line distance of roughly 2,688 metres, just under 3 kilometres. Because of the size of the chariots and the sheer volume of devotees pulling them, the procession often doesn't reach Gundicha until nightfall on the very first day. The deities then formally enter the temple the following day and remain there for seven nights, receiving darshan from devotees who continue to arrive from across the country.</p>

      <h2>The Return Leg: Bahuda Yatra</h2>
      <p>The route isn't one-way. About a week later, the same three chariots retrace this exact path in reverse during the Bahuda Yatra, carrying the deities back from Gundicha Temple to the Jagannath Temple. It's the same road, the same 3 kilometres, but a different mood — equally massive in scale, and considered just as spiritually significant to witness as the outward journey.</p>

      <h2>Best Vantage Points Along the Route</h2>
      <p>If you're watching rather than pulling, where you stand along Bada Danda matters:</p>
      <ul>
        <li class="mb-2"><strong>Near Singhadwara</strong> — best for seeing the deities placed onto the chariots and the Chhera Pahara ritual, though it's the most crowded stretch.</li>
        <li class="mb-2"><strong>Mid-route, near Mausi Maa Temple</strong> — a good balance of atmosphere and slightly thinner crowds, plus the chance to see the Poda Pitha ritual.</li>
        <li class="mb-2"><strong>Near Gundicha Temple</strong> — quieter through the day, but busiest in the evening as the chariots approach.</li>
      </ul>
      <p>Wherever you choose, arriving well before the chariots begin moving is essential — positions along the barricaded route fill up fast.</p>

      <h2>Where to Stay Along the Route</h2>
      <p>Because the entire festival unfolds on a single road, your hotel's distance from Bada Danda matters more here than in almost any other Indian festival. Victoria Grand is a boutique hotel in Puri positioned close to both the Jagannath Temple and the sea beach, putting you within easy reach of the Singhadwara starting point without a long, crowded commute on festival morning. A stay here means you can step out for the early rituals, retreat for rest during the long midday pull, and still be back on Bada Danda in time for the evening approach to Gundicha Temple.</p>
      <p>Victoria Grand's rooms are designed for exactly this kind of trip — comfortable, well-appointed spaces to recharge between the day's rituals, with the convenience of being minutes from the route rather than a long taxi ride away.</p>

      <h2>Getting to the Route</h2>
      <ul>
        <li class="mb-2"><strong>By Air:</strong> Biju Patnaik International Airport, Bhubaneswar, is about 60 km from Puri, with regular taxis and buses onward.</li>
        <li class="mb-2"><strong>By Rail:</strong> Puri Railway Station sits only about 3 km from the Jagannath Temple end of the route.</li>
        <li class="mb-2"><strong>By Road:</strong> NH-16 connects Puri to Bhubaneswar, though expect diversions and vehicle-free zones along Bada Danda itself during the festival.</li>
      </ul>

      <h2>A Few Practical Notes</h2>
      <ul>
        <li class="mb-2">Bada Danda is converted into a vehicle-free corridor during the festival — all movement near the route is on foot.</li>
        <li class="mb-2">Non-Hindus cannot enter the Jagannath Temple itself but are welcome to watch the procession from anywhere along Bada Danda.</li>
        <li class="mb-2">Expect significant security checks and crowd-management barricades, especially near Singhadwara.</li>
        <li class="mb-2">Keep water, comfortable footwear, and minimal valuables with you — the walk along even part of the route in festival crowds is more demanding than it looks.</li>
      </ul>

      <h2>Final Word</h2>
      <p>The Rath Yatra route is deceptively simple on paper — one road, one direction, three kilometres. In practice, it's one of the most immersive religious experiences you can witness, where every metre of Bada Danda carries centuries of ritual, devotion, and celebration. Staying close to the route, at a property like Victoria Grand, means you're not just watching the journey from a distance — you're a short walk from being part of it.</p>
      <p>Planning your Rath Yatra trip to Puri? Book your stay at Victoria Grand and stay minutes from Bada Danda and the Jagannath Temple.</p>

      <h2>Frequently Asked Questions</h2>
      <div class="faq-section space-y-4">
        <p><strong>Q: What is the Rath Yatra route in Puri?</strong><br/>
        A: The route runs entirely along Bada Danda (the Grand Road), starting at the Singhadwara of the Jagannath Temple and ending about 3 km away at the Gundicha Temple.</p>
        
        <p><strong>Q: How long is the Bada Danda route?</strong><br/>
        A: Bada Danda stretches approximately 3 kilometres — precisely around 2,688 metres — connecting the Jagannath Temple to the Gundicha Temple.</p>
        
        <p><strong>Q: Which chariot goes first on the Rath Yatra route?</strong><br/>
        A: Taladhwaja, the chariot of Lord Balabhadra, typically leads the procession, followed by Darpadalana (Devi Subhadra) and finally Nandighosha (Lord Jagannath).</p>
        
        <p><strong>Q: Where is the best place to stand and watch the procession?</strong><br/>
        A: Near Singhadwara for the send-off rituals, near the Mausi Maa Temple for a mid-route view with slightly thinner crowds, or near Gundicha Temple for the evening arrival — each offers a different experience of the same route.</p>
        
        <p><strong>Q: What hotel is closest to the Rath Yatra route?</strong><br/>
        A: Victoria Grand is a boutique hotel positioned close to both the Jagannath Temple and the sea beach, putting guests within easy reach of the Bada Danda route without a long festival-day commute.</p>
      </div>
    `,
  },
  "boutique-luxury-puri-ratha-yatra-stay": {
    title: "Boutique Luxury Meets Sacred Puri: Where to Stay for Ratha Yatra",
    author: "Vikram Singh",
    authorRole: "Hospitality Specialist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    date: "July 19, 2026",
    readTime: "7 min",
    category: "Hospitality",
    image: "/assets/blog/boutique-luxury-puri-ratha-yatra-stay.webp",
    excerpt:
      "You don't have to choose between the sacred chaos of Ratha Yatra and a genuinely comfortable stay. Here's why a boutique hotel near the temple and beach changes the trip.",
    content: `
      <p>There's a certain assumption people carry about Ratha Yatra travel — that if you're going for a festival this big and this crowded, you have to give up on comfort. Basic rooms, no frills, just a place to crash between all the chaos outside. And for a long time, that was mostly true in Puri. But things have changed. You can actually have both now — the sacred, overwhelming beauty of Ratha Yatra, and a genuinely comfortable, boutique-style stay to come back to every evening.</p>
      <p>If you're planning Ratha Yatra 2026 and don't want to compromise on comfort just because it's festival season, this one's for you.</p>

      <h2>Why "Just Any Hotel" Doesn't Cut It During Ratha Yatra</h2>
      <p>Puri during Ratha Yatra is a different city altogether. The streets are packed, the heat and humidity test your patience, and after a long day of standing in crowds near Bada Danda, you want to walk into a room that actually feels like a break from all of that, not just a bed in a busy building.</p>
      <p>This is where the difference between a basic hotel and a proper <strong>boutique or luxury hotel near Jagannath Temple</strong> really shows. It's not about being fancy for the sake of it. It's about small things that matter more than you'd expect during festival season — a room that's actually quiet, water pressure that works even when the whole city is running at full capacity, staff who know how to handle the extra rush without your experience falling apart.</p>

      <h2>The Location Sweet Spot: Temple and Beach, Both</h2>
      <p>One thing worth being picky about when choosing a <strong>hotel close to both temple and beach in Puri</strong> is exactly that — both. A lot of hotels lean one way or the other. Some are close to Bada Danda but nowhere near the coast, others sit right on the beach but leave you dealing with a long, crowded commute to the temple every single day of the festival.</p>
      <p>The sweet spot is a heritage or boutique property that gives you quick access to the temple for the rituals and procession, while still being close enough to the Puri sea beach that you can unwind with an evening walk by the water once the day's madness settles down. That contrast, sacred energy in the day, calm sea air in the evening, is honestly one of the best parts of doing Ratha Yatra properly.</p>

      <h2>What "Boutique Luxury" Actually Means Here</h2>
      <p>I want to be clear this isn't about over-the-top glamour. A good boutique hotel in Puri during Ratha Yatra season usually means a few specific things done really well:</p>
      <ul>
        <li class="mb-2"><strong>A grand deluxe room that's actually spacious.</strong> After a day of navigating crowds, you don't want to come back to a cramped room. Space to breathe, decent lighting, a proper bed, these basics matter more during festival season than any other time of year.</li>
        <li class="mb-2"><strong>A pool to cool off in.</strong> Puri's summer heat combined with festival crowds can be exhausting. A hotel with a swimming pool near the temple gives you a way to recover in the evening without having to brave the beach crowds every single time.</li>
        <li class="mb-2"><strong>Heritage character without sacrificing comfort.</strong> There's something nice about staying somewhere that has a bit of history and character to it, rather than a generic, cookie-cutter room that could be anywhere in the country. It adds to the whole feeling of being somewhere genuinely special during a festival this significant.</li>
      </ul>

      <h2>Booking Early Matters More Than People Think</h2>
      <p>If you're seriously considering a <strong>luxury stay in Puri for Rath Yatra 2026</strong>, the biggest mistake you can make is waiting too long to book. The good boutique and heritage properties, especially the ones close to both the temple and the beach, fill up fast, often months before the actual festival dates. Waiting until the last minute usually means settling for whatever's left, which defeats the whole purpose of planning a comfortable stay in the first place.</p>

      <h2>A Property Worth Considering</h2>
      <p>This is exactly where Hotel Victoria Grand makes a strong case for itself. It sits in that ideal spot, close to both the temple and the sea beach, so you're not choosing one experience over the other. With grand deluxe rooms, a swimming pool, and that heritage feel that a lot of standard hotels simply don't offer, it gives you a genuinely comfortable base to return to after a long day out in the Ratha Yatra crowds. For anyone who wants the full spiritual experience of the festival without giving up on comfort, it's worth a serious look.</p>

      <h2>Final Thought</h2>
      <p>Ratha Yatra is meant to be an overwhelming, moving experience, and it should be. But there's no rule saying your stay has to be uncomfortable just because the festival outside is intense. Choosing a boutique or heritage hotel that's close to both the temple and the beach, with the right comforts in place, means you get to fully show up for the sacred parts of the trip because you're not exhausted from a bad stay. That balance is really what makes a Ratha Yatra trip memorable for all the right reasons.</p>
    `,
  },
};

export function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <section className="relative py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-olive-dark mb-4">
              Article Not Found
            </h1>
            <p className="text-olive/70 mb-8">
              Sorry, the article you're looking for doesn't exist.
            </p>
            <Link href="/blog">
              <Button className="bg-ochre text-white hover:bg-ochre-dark">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className="relative py-16 md:py-24 bg-cream overflow-hidden">
      {/* Royal Corner Ornaments */}
      <RoyalCornerOrnament
        position="top-left"
        color="#767545"
        size="lg"
        className="top-6 left-6 md:top-8 md:left-8 opacity-15 hidden md:block"
      />
      <RoyalCornerOrnament
        position="bottom-right"
        color="#767545"
        size="lg"
        className="bottom-6 right-6 md:bottom-8 md:right-8 opacity-15 hidden md:block"
      />

      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-olive hover:text-ochre transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans font-semibold tracking-wide">
            Back to Articles
          </span>
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-ochre/10 border border-ochre/20 rounded-full">
              <span className="font-sans text-sm font-semibold text-ochre tracking-widest uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-olive-dark mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-olive/70 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-sm text-olive/60 font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <RoyalDivider color="#c1893e" className="my-8" />
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-olive-dark/5" />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 font-sans text-olive/80">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-6"
              style={
                {
                  "--tw-prose-headings": "#2a2a1a",
                  "--tw-prose-body": "#3d3d2e",
                  "--tw-prose-bold": "#2a2a1a",
                  "--tw-prose-links": "#c1893e",
                } as any
              }
            />
          </div>

          {/* Author Section */}
          <div className="border-t-2 border-b-2 border-olive/10 py-8 my-12">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl text-olive-dark mb-1">
                  {post.author}
                </h3>
                <p className="text-olive/60 font-sans text-sm mb-3">
                  {post.authorRole}
                </p>
                <p className="text-olive/70 text-sm">
                  Expert in cultural heritage and traditional arts with over 10
                  years of experience in documenting and preserving Odisha's
                  rich traditions.
                </p>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-sm font-semibold text-olive tracking-widest uppercase">
              Share:
            </span>
            <div className="flex gap-3">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "t", label: "Twitter" },
                { icon: "l", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="p-3 bg-olive/5 hover:bg-ochre text-olive hover:text-white transition-all duration-300 rounded-full"
                  aria-label={social.label}
                >
                  <Share2 className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
