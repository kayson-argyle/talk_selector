export interface Resource {
  id: number;
  title: string;
  speaker: string;
  source: string;
  summary: string;
  link: string;
}

const rawResources: Omit<Resource, 'id'>[] = [
  {
    title: `"Think Celestial!"`,
    speaker: "Pres. Russell M. Nelson",
    source: "Gen. Conf. (Oct 2023)",
    summary: "Strategic eternal perspective filter.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2023/10/51nelson?lang=eng"
  },
  {
    title: `"Temptation"`,
    speaker: "Elder Rulon G. Craven",
    source: "Gen. Conf. (Apr 1996)",
    summary: "Exit/Wrong Way/Stop sign methodology.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/1996/04/temptation?lang=eng"
  },
  {
    title: `"Beware the Second Temptation"`,
    speaker: "Elder Scott D. Whiting",
    source: "Gen. Conf. (Apr 2025)",
    summary: "Analysis of hiding after sin.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2025/04/53whiting?lang=eng"
  },
  {
    title: "Genesis 39 (Joseph & Potiphar's Wife)",
    speaker: "Scripture (Genesis)",
    source: "Narrative",
    summary: "The archetype of fleeing temptation.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/ot/gen/39?lang=eng"
  },
  {
    title: "Matthew 4 (Mount of Temptation)",
    speaker: "Scripture (Matthew)",
    source: "Narrative",
    summary: "Categorization of temptation forms.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/4?lang=eng&id=p1-p11#p1"
  },
  {
    title: `"Overcoming Temptation"`,
    speaker: "Pres. David O. McKay",
    source: "Teachings of Presidents",
    summary: "Analysis of the three forms of temptation.",
    link: "https://www.churchofjesuschrist.org/study/manual/teachings-david-o-mckay/chapter-9?lang=eng"
  },
  {
    title: `"Confidence in the Presence of God"`,
    speaker: "Pres. Russell M. Nelson",
    source: "Gen. Conf. (Apr 2025)",
    summary: "Virtue as a source of spiritual power.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2025/04/57nelson?lang=eng"
  },
  {
    title: `"What Desirest Thou?"`,
    speaker: "Elder B. Corey Cuvelier",
    source: "BYU Devotional",
    summary: "Transformation and education of desire.",
    link: "https://speeches.byu.edu/talks/b-corey-cuvelier/what-desirest-thou/"
  },
  {
    title: "Moses 1 (Moses vs Satan)",
    speaker: "Scripture (Moses)",
    source: "Narrative",
    summary: "Identity as a primary defense.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/pgp/moses/1?lang=eng&id=p1-p26#p1"
  },
  {
    title: `"Spiritual Crocodiles"`,
    speaker: "Pres. Boyd K. Packer",
    source: "Talk / New Era",
    summary: "The principle of spiritual avoidance.",
    link: "https://www.churchofjesuschrist.org/study/new-era/2001/10/spiritual-crocodiles?lang=eng"
  },
  {
    title: "D&C 121:45–46 (The Virtue Promise)",
    speaker: "Scripture (D&C)",
    source: "Sermon/Revelation",
    summary: "Cognitive link between virtue and confidence.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/121?lang=eng&id=p45-p46#p45"
  },
  {
    title: "2 Nephi 4 (Nephi's Psalm)",
    speaker: "Scripture (Book of Mormon)",
    source: "Narrative/Lament",
    summary: "Dealing with besetting sins and weakness.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4?lang=eng&id=p15-p35#p15"
  },
  {
    title: "Alma 39 (Alma speaks to Corianton)",
    speaker: "Scripture (Book of Mormon)",
    source: "Sermon",
    summary: "Go no more after the lusts of your eyes.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/39?lang=eng"
  },
  {
    title: "1 Corinthians 10",
    speaker: "Scripture (Bible)",
    source: "Sermon",
    summary: `The promise of the "way of escape."`,
    link: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/10?lang=eng"
  },
  {
    title: `"The Lord Looketh on the Heart"`,
    speaker: "Elder Ronald M. Barcellos",
    source: "Gen. Conf. (Oct 2025)",
    summary: "Purity of intent as a shield.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2025/10/14barcellos?lang=eng"
  },
  {
    title: "Gospel Topics: Temptation",
    speaker: "Official Church Resource",
    source: "Entry/Guide",
    summary: "Comprehensive definition and scripture list.",
    link: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/temptation?lang=eng"
  },
  {
    title: "Topical Guide: Temptation",
    speaker: "Official Church Resource",
    source: "Concordance",
    summary: "List of cross-dispensational scriptures.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/tg/temptation?lang=eng"
  },
  {
    title: "Gospel Topics: Chastity",
    speaker: "Official Church Resource",
    source: "Entry/Guide",
    summary: "Defensive strategies for moral purity.",
    link: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/chastity?lang=eng"
  },
  {
    title: "3 Nephi 18:15–25 (Watch & Pray)",
    speaker: "Scripture (Book of Mormon)",
    source: "Sermon",
    summary: "The Savior’s command to pray against sifting.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/18?lang=eng&id=p15-p25#p15"
  },
  {
    title: `"Overpowering the Goliaths"`,
    speaker: "Pres. Gordon B. Hinckley",
    source: "Liahona / Ensign",
    summary: `Courage in facing modern "Goliaths."`,
    link: "https://www.churchofjesuschrist.org/study/general-conference/1983/04/overpowering-the-goliaths-in-our-lives?lang=eng"
  },
  {
    title: `"O That Cunning Plan of the Evil One"`,
    speaker: "Pres. M. Russell Ballard",
    source: "Gen. Conf. (Oct 2010)",
    summary: "The adversary uses deceptive, small hooks to capture us like a fly fisherman.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2010/10/o-that-cunning-plan-of-the-evil-one?lang=eng"
  },
  {
    title: `"Personal Purity"`,
    speaker: "Elder Jeffrey R. Holland",
    source: "Gen. Conf. (Oct 1998)",
    summary: "A masterclass on why moral purity is doctrinally critical.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/1998/10/personal-purity?lang=eng"
  },
  {
    title: `"We Believe in Being Chaste"`,
    speaker: "Elder David A. Bednar",
    source: "Gen. Conf. (Apr 2013)",
    summary: "Why the adversary tempts us primarily through the physical body.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2013/04/we-believe-in-being-chaste?lang=eng&id=p16-p28#p16"
  },
  {
    title: `"The Three Rs of Choice"`,
    speaker: "Pres. Thomas S. Monson",
    source: "Gen. Conf. (Oct 2010)",
    summary: "The Right, Responsibility, and Results of choices when facing temptation.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2010/10/the-three-rs-of-choice?lang=eng"
  },
  {
    title: "James 1:12–17",
    speaker: "Scripture (Bible)",
    source: "Sermon",
    summary: "God tempts no man; we are drawn away by our own lusts.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/nt/james/1?lang=eng&id=p12-p17#p12"
  },
  {
    title: "Hebrews 4:12–16",
    speaker: "Scripture (Bible)",
    source: "Sermon",
    summary: "Jesus was in all points tempted like as we are, yet without sin.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/4?lang=eng&id=p12-p16#p12"
  },
  {
    title: "For the Strength of Youth: Jesus Christ will help you",
    speaker: "Official Church Resource",
    source: "Manual",
    summary: "Overarching principles for youth facing temptation and needing help.",
    link: "https://www.churchofjesuschrist.org/study/manual/for-the-strength-of-youth/03-help?lang=eng"
  },
  {
    title: "True to the Faith: Temptation",
    speaker: "Official Church Resource",
    source: "Manual",
    summary: "Doctrinal definition and practical steps for resisting.",
    link: "https://www.churchofjesuschrist.org/study/manual/true-to-the-faith/temptation?lang=eng"
  },
  {
    title: "2 Samuel 11 (David & Bathsheba)",
    speaker: "Scripture (Bible)",
    source: "Narrative",
    summary: "A tragic example of yielding to temptation and its cascading consequences.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/ot/2-sam/11?lang=eng"
  },
  {
    title: `Seek Christ in Every Thought`,
    speaker: "Elder Ulisses Soares",
    source: "Gen. Conf. (Oct 2020)",
    summary: "The analogy of a magnet showing how the power of temptation diminishes.",
    link: "https://www.churchofjesuschrist.org/study/general-conference/2020/10/43soares?lang=eng"
  },
  {
    title: "1 Corinthians 10:13",
    speaker: "Scripture (Bible)",
    source: "Sermon",
    summary: "God will not suffer you to be tempted above that ye are able.",
    link: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-cor/10?lang=eng&id=p13#p13"
  }
];

export const resources: Resource[] = rawResources.map((resource, index) => ({
  ...resource,
  id: index + 1
}));
