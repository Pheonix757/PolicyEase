export const policies = [

    {
        id: 'msme-act',
        categoryId: 'business',
        title: 'MSME Act 2006 (Small Business Protection)',
        description: 'A law that supports, protects, and promotes small and medium businesses in India.',
        verified: true,
        labels: {
            benefits: 'Who benefits from this?'
        },
        simplified: {
            summary: [
                'This law supports small and medium businesses in India.',
                'It defines what counts as micro, small, and medium enterprises.',
                'It helps businesses get government benefits and easier loans.',
                'It protects small businesses when buyers delay payments.',
                'Buyers must pay interest if payment is late.',
                'It allows businesses to officially register as MSMEs.',
                'Registered MSMEs get priority in government purchases.',
                'Special councils help resolve payment disputes quickly.',
                'The goal is to make small businesses safe, strong, and competitive.'
            ],
            benefits: [
                'Any manufacturing or service business in India',
                'Sole proprietors, partnerships, companies, cooperatives',
                'Businesses that fall under micro, small, or medium limits'
            ],
            eligibility: [
                'You must be running a business',
                'Your investment/turnover must fall within MSME limits',
                'You should register as an MSME (Udyam Registration)'
            ],
            process: 'Udyam (MSME) Registration Portal https://udyamregistration.gov.in',
            faqs: [
                {
                    question: 'Is MSME registration compulsory?',
                    answer: 'No, but without registration you cannot claim most benefits.'
                },
                {
                    question: 'Do service businesses qualify?',
                    answer: 'Yes. Both manufacturing and service businesses are covered.'
                },
                {
                    question: 'What if a buyer does not pay on time?',
                    answer: 'You can complain to the MSME Facilitation Council and claim interest.'
                },
                {
                    question: 'Does this law give direct money to businesses?',
                    answer: 'No direct cash, but it enables loans, protection, and government support.'
                },
                {
                    question: 'Can startups register as MSMEs?',
                    answer: 'Yes, if they meet the MSME criteria.'
                }
            ]
        },
        eligibilityCriteria: {
            minAge: 18,
            maxAge: 100,
            occupations: ['business'],
            states: ['All'],
            incomeRange: 'any'
        }
    },
    {
        id: 'bbbp-scheme',
        categoryId: 'families',
        title: 'Beti Bachao Beti Padhao (BBBP)',
        description: 'A scheme to save and educate the girl child and prevent gender discrimination.',
        verified: true,
        labels: {
            process: 'How does it work?'
        },
        simplified: {
            summary: [
                'This scheme is to save and educate the girl child.',
                'It was started because fewer girls were being born in many areas.',
                'It works to stop discrimination before and after birth.',
                'It spreads awareness through schools, media, and communities.',
                'Health, education, and women departments work together.',
                'It focuses on long-term change in society, not cash benefits.',
                'Special districts get extra monitoring and action plans.',
                'Local officers and health workers play a key role.',
                'The aim is to make society respect girls equally.'
            ],
            benefits: [
                'Schools',
                'Health services',
                'Awareness programs',
                'District and State administrations handle implementation'
            ],
            eligibility: [], // Empty to hide the section
            process: [
                'Families do not need to apply',
                'Benefits come through schools, health services, and awareness programs',
                'District and State administrations handle implementation',
                'Official url to apply- BBBP Official Portal https://wcd.nic.in/bbbp-scheme'
            ],
            faqs: [
                {
                    question: 'Can parents apply directly for money under BBBP?',
                    answer: 'No. There is no direct cash benefit under this scheme.'
                },
                {
                    question: 'Who runs this scheme on the ground?',
                    answer: 'District Collectors, health workers, teachers, and state governments.'
                },
                {
                    question: 'How does this scheme help girls?',
                    answer: 'By improving healthcare, education access, and social awareness.'
                },
                {
                    question: 'Is this scheme limited to certain districts?',
                    answer: 'It now covers all districts in India, with extra focus on some.'
                },
                {
                    question: 'How can citizens benefit from this scheme?',
                    answer: 'Through better services, education support, and protection of girls.'
                }
            ]
        },
        eligibilityCriteria: {
            minAge: 0,
            maxAge: 100,
            occupations: ['families', 'students'],
            states: ['All'],
            incomeRange: 'any'
        }
    },
    {
        id: 'nphce',
        categoryId: 'seniors',
        title: 'National Programme for Health Care of the Elderly (NPHCE)',
        description: 'Healthcare program for citizens aged 60+ focusing on geriatric care.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites / Eligibility',
            process: 'How to apply?'
        },
        simplified: {
            summary: [
                'This programme is made to take care of people aged 60 years and above.',
                'It focuses on health problems common in old age like BP, diabetes, joint pain, etc.',
                'Special health services are provided at government hospitals and health centres.',
                'Elderly people can get regular checkups, medicines, and treatment.',
                'Services are available from local health centres to big hospitals.',
                'Doctors and health workers are trained specially for elderly care.',
                'Home visits are done for bed-ridden or very weak senior citizens.',
                'The programme also supports physiotherapy and rehabilitation.',
                'The goal is to help elderly people live healthier and independent lives.'
            ],
            benefits: [
                'Any Indian citizen aged 60 years or above',
                'Especially useful for elderly with long-term illnesses'
            ],
            eligibility: [
                'Must be 60+ years old',
                'Should visit a government health facility',
                'Carry basic ID (Aadhaar, hospital card, etc.)'
            ],
            process: [
                'There is NO separate online application',
                'Services are provided through: PHC / CHC',
                'District Hospitals',
                'Medical Colleges (Regional Geriatric Centres)',
                'More info: https://nhm.gov.in'
            ],
            faqs: [
                {
                    question: 'Do senior citizens need to pay for treatment?',
                    answer: 'Most services are free or very low cost at government facilities.'
                },
                {
                    question: 'Is this scheme only for poor people?',
                    answer: 'No. It is for all senior citizens, regardless of income.'
                },
                {
                    question: 'Can bedridden elders get help?',
                    answer: 'Yes. Home visits are part of the programme.'
                },
                {
                    question: 'Is medicine provided under this scheme?',
                    answer: 'Yes, medicines for common elderly diseases are provided.'
                },
                {
                    question: 'Where can I ask about this scheme locally?',
                    answer: 'At your nearest government hospital or health centre.'
                }
            ],
            misconceptions: [
                { myth: 'Senior citizens must apply online', reality: 'No application needed — services are hospital-based.' },
                { myth: 'Only very poor elders are eligible', reality: 'All senior citizens (60+) are eligible.' },
                { myth: 'It provides pension or cash', reality: 'It provides healthcare services, not money.' },
                { myth: 'Only big hospitals provide this service', reality: 'Services start from local health centres.' },
                { myth: 'Home visits are not allowed', reality: 'Home care is included for bedridden elders.' }
            ]
        },
        eligibilityCriteria: {
            minAge: 60,
            maxAge: 120,
            occupations: ['seniors'],
            states: ['All'],
            incomeRange: 'any'
        }
    },
    {
        id: 'senior-maintenance-act',
        categoryId: 'seniors',
        title: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
        description: 'Legal protection and maintenance support for parents and senior citizens.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites',
            process: 'How / Where to apply'
        },
        simplified: {
            summary: [
                'This law protects parents and senior citizens.',
                'Children are legally required to take care of their parents.',
                'Senior citizens can ask for monthly maintenance.',
                'The law also applies to relatives if the senior citizen is childless.',
                'Special tribunals handle cases quickly and simply.',
                'Maintenance includes food, shelter, clothes, and medical care.',
                'Senior citizens can complain if they are neglected or abandoned.',
                'Orders are usually passed within 90 days.',
                'Non-payment can lead to penalty or jail.'
            ],
            benefits: [
                'Parents (any age)',
                'Senior citizens 60 years and above',
                'Childless senior citizens against relatives'
            ],
            eligibility: [
                'Applicant cannot maintain themselves financially',
                'Proof of relationship (parent/child/relative)',
                'Application to local Maintenance Tribunal'
            ],
            process: [
                'No central online portal',
                'Apply at: Maintenance Tribunal (usually SDM office)',
                'Through District Social Welfare Office',
                'Info page: https://socialjustice.gov.in'
            ],
            faqs: [
                {
                    question: 'Can parents force children to support them?',
                    answer: 'Yes. This law makes it mandatory.'
                },
                {
                    question: 'What is the maximum time for decision?',
                    answer: 'Usually within 90 days.'
                },
                {
                    question: 'Can senior citizens apply themselves?',
                    answer: 'Yes, or through an NGO or authorised person.'
                },
                {
                    question: 'Is this applicable to daughters too?',
                    answer: 'Yes. Sons and daughters both are responsible.'
                },
                {
                    question: 'Can this law protect senior citizens from abandonment?',
                    answer: 'Yes, it is meant exactly for that.'
                }
            ],
            misconceptions: [
                { myth: 'Parents must go to court', reality: 'Cases go to special tribunals, not regular courts.' },
                { myth: 'Only sons are responsible', reality: 'Daughters are equally responsible.' },
                { myth: 'Only very old people can apply', reality: 'Parents of any age can apply.' },
                { myth: 'Maintenance amount is fixed', reality: 'Amount depends on need and capacity of children.' },
                { myth: 'This law is only advisory', reality: 'It is legally enforceable.' }
            ]
        },
        eligibilityCriteria: {
            minAge: 60,
            maxAge: 120,
            occupations: ['seniors'],
            states: ['All'],
            incomeRange: 'any'
        }
    },
    {
        id: 'osh-code',
        categoryId: 'workers',
        title: 'Occupational Safety, Health and Working Conditions Code, 2020',
        description: 'Law ensuring safety, health, and working conditions for workers.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites',
            process: 'Application / Access'
        },
        simplified: {
            summary: [
                'This law is about worker safety and health.',
                'It applies to factories, mines, construction sites, ports, etc.',
                'Employers must provide safe working conditions.',
                'Workers must get clean drinking water, toilets, ventilation, etc.',
                'Safety rules apply to contract workers and migrant workers too.',
                'Women workers get special safety protections.',
                'Workplaces must report accidents and injuries.',
                'Inspections are done to ensure safety.',
                'The aim is to reduce accidents and health risks at work.'
            ],
            benefits: [
                'Factory workers',
                'Construction workers',
                'Migrant workers',
                'Contract labourers'
            ],
            eligibility: [
                'Must be employed in a covered establishment',
                'Employer must be registered'
            ],
            process: [
                'No individual application',
                'This is a compliance law for employers.',
                'Info page: https://labour.gov.in'
            ],
            faqs: [
                {
                    question: 'Does this law give money to workers?',
                    answer: 'No. It ensures safety and health, not cash.'
                },
                {
                    question: 'Are migrant workers covered?',
                    answer: 'Yes, clearly covered.'
                },
                {
                    question: 'Is this law for private companies too?',
                    answer: 'Yes.'
                },
                {
                    question: 'Who enforces this law?',
                    answer: 'Government labour and safety officers.'
                },
                {
                    question: 'Can workers complain about unsafe conditions?',
                    answer: 'Yes, through labour authorities.'
                }
            ]
        }
    },
    {
        id: 'startup-india',
        categoryId: 'business',
        title: 'Startup India – Action Plan (2016)',
        description: 'Government initiative to support startups with tax benefits and simpler rules.',
        verified: true,
        labels: {
            benefits: 'Who will benefit from this?',
            eligibility: 'Pre-requisites',
            process: 'Official Application URL'
        },
        simplified: {
            summary: [
                'This plan supports new startups in India.',
                'It reduces government rules and paperwork.',
                'Startups can self-certify many compliances.',
                'A single platform helps startups get guidance and funding info.',
                'Government helps with patents at lower cost.',
                'Startups get tax benefits for initial years.',
                'Special funds help startups get investment support.',
                'Colleges and incubators are encouraged to support startups.',
                'The goal is to create jobs and innovation.'
            ],
            benefits: [
                'Startups recognised by the Government of India',
                'Companies working on innovation or new ideas'
            ],
            eligibility: [
                'Company must be registered in India',
                'Must qualify as a Startup under DPIIT rules',
                'Should apply for Startup India recognition'
            ],
            process: [
                'Startup India Portal https://www.startupindia.gov.in'
            ],
            faqs: [
                {
                    question: 'Is this only for tech startups?',
                    answer: 'No. It includes agriculture, health, education, manufacturing, etc.'
                },
                {
                    question: 'Does it give direct funding?',
                    answer: 'Indirectly, through funds and tax benefits.'
                },
                {
                    question: 'Are students allowed to apply?',
                    answer: 'Yes, if they form a valid startup.'
                },
                {
                    question: 'Is registration free?',
                    answer: 'Yes, Startup India registration is free.'
                },
                {
                    question: 'Can small startups in villages apply?',
                    answer: 'Yes, location does not matter.'
                }
            ],
            misconceptions: [
                { myth: 'Only tech startups can apply', reality: 'Any sector can apply.' },
                { myth: 'Government gives direct cash to all startups', reality: 'Support is through tax benefits, funds, and facilitation.' },
                { myth: 'Registration is costly', reality: 'Startup India registration is free.' },
                { myth: 'Only big cities are eligible', reality: 'Location does not matter.' },
                { myth: 'Students cannot apply', reality: 'Students can apply if they form a startup.' }
            ]
        }
    },
    {
        id: 'pm-kmy',
        categoryId: 'farmers',
        title: 'Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)',
        description: 'Pension scheme for small and marginal farmers.',
        verified: true,
        labels: {
            benefits: 'Who can apply?',
            eligibility: 'Pre-requisites',
            process: 'Official application URL'
        },
        simplified: {
            summary: [
                'This is a pension scheme for small and marginal farmers.',
                'Farmers join when they are young (18–40 years).',
                'They contribute a small amount every month.',
                'The government adds the same amount.',
                'After the age of 60, the farmer gets ₹3000 per month pension.',
                'If the farmer dies, the spouse gets the pension.',
                'It is voluntary — farmers choose to join.',
                'The pension money is managed by LIC of India.',
                'The aim is to give financial security in old age.'
            ],
            benefits: [
                'Small and marginal farmers',
                'Farmers owning up to 2 hectares of land',
                'Age between 18 and 40 years'
            ],
            eligibility: [
                'Must not be covered under other pension schemes',
                'Must not be an income tax payer',
                'Aadhaar and bank account required',
                'Monthly contribution (₹55–₹200 depending on age)'
            ],
            process: [
                'https://maandhan.in',
                '(Also available via CSC centres)'
            ],
            faqs: [
                {
                    question: 'How much pension will I get?',
                    answer: '₹3000 per month after age 60.'
                },
                {
                    question: 'Is this scheme free?',
                    answer: 'No, it is contribution-based, but government matches it.'
                },
                {
                    question: 'Can women farmers apply?',
                    answer: 'Yes, both men and women.'
                },
                {
                    question: 'What if the farmer dies?',
                    answer: 'The spouse gets the pension.'
                },
                {
                    question: 'Can PM-KISAN money be used?',
                    answer: 'Yes, contribution can be auto-debited from PM-KISAN.'
                }
            ],
            misconceptions: [
                { myth: 'This scheme is free money from the government', reality: 'Farmers must contribute monthly; government only matches it.' },
                { myth: 'Only old farmers can join', reality: 'Only 18–40 years farmers can join.' },
                { myth: 'All farmers are eligible', reality: 'Only small and marginal farmers (up to 2 hectares).' },
                { myth: 'Pension starts immediately after joining', reality: 'Pension starts only after age 60.' },
                { myth: 'If the farmer dies, money is lost', reality: 'Spouse receives pension.' }
            ]
        }
    },
    {
        id: 'nep-2020',
        categoryId: 'students',
        title: 'National Education Policy (NEP) 2020',
        description: 'A comprehensive framework to transform the education system in India.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites / Eligibility',
            process: 'Official information URL'
        },
        simplified: {
            summary: [
                'This policy changes how education works in India.',
                'Focuses on understanding, not memorising.',
                'Introduces new school structure (5+3+3+4).',
                'Emphasises early learning and basic skills.',
                'Encourages multiple subjects and flexibility.',
                'Supports regional languages in education.',
                'Improves teacher training and respect.',
                'Promotes technology and digital education.',
                'Makes education inclusive for all students.'
            ],
            benefits: [
                'School students',
                'College students',
                'Teachers',
                'Parents'
            ],
            eligibility: [
                'No application needed',
                'Implemented through schools, colleges, boards, universities'
            ],
            process: [
                'https://education.gov.in'
            ],
            faqs: [
                {
                    question: 'Is NEP a law?',
                    answer: 'No, it is a policy direction.'
                },
                {
                    question: 'Does it change exams?',
                    answer: 'Yes, focus is on concept learning.'
                },
                {
                    question: 'Will boards disappear?',
                    answer: 'No, but boards will change how they assess.'
                },
                {
                    question: 'Does it support vocational skills?',
                    answer: 'Yes, strongly.'
                },
                {
                    question: 'Is it for government schools only?',
                    answer: 'No, all schools and colleges.'
                }
            ],
            misconceptions: [
                { myth: 'NEP cancels board exams', reality: 'Boards continue, but assessment methods change.' },
                { myth: 'English is being removed', reality: 'No language is banned.' },
                { myth: 'Only government schools follow NEP', reality: 'All schools and colleges follow it.' },
                { myth: 'Students must study many subjects at once', reality: 'Students get flexibility, not burden.' },
                { myth: 'NEP is a law', reality: 'It is a policy direction, not a law.' }
            ]
        }
    },
    {
        id: 'wage-code-2019',
        categoryId: 'workers',
        title: 'Code on Wages, 2019',
        description: 'Law ensuring fair wages and timely payment for all workers.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites',
            process: 'How to Apply?'
        },
        simplified: {
            summary: [
                'This law ensures fair wages for workers.',
                'It applies to all workers in all sectors.',
                'Fixes minimum wages.',
                'Ensures timely payment of salary.',
                'Covers bonus payments.',
                'Stops gender discrimination in wages.',
                'Defines working hours and overtime pay.',
                'Provides penalties for employers who break rules.',
                'Replaces multiple older wage laws.'
            ],
            benefits: [
                'All workers (private + public)',
                'Contract and migrant workers'
            ],
            eligibility: [
                'Must be employed',
                'Employer must follow the law'
            ],
            process: [
                'No central online portal',
                'Official information URL https://labour.gov.in'
            ],
            faqs: [
                {
                    question: 'Does this apply to daily wage workers?',
                    answer: 'Yes.'
                },
                {
                    question: 'Can women be paid less than men?',
                    answer: 'No, equal pay is mandatory.'
                },
                {
                    question: 'Is there a fixed minimum wage?',
                    answer: 'Yes, government fixes it.'
                },
                {
                    question: 'Is this a scheme?',
                    answer: 'No, it is a law.'
                },
                {
                    question: 'Who enforces it?',
                    answer: 'Labour authorities.'
                }
            ],
            misconceptions: [
                { myth: 'This applies only to government workers', reality: 'It applies to all workers, public and private.' },
                { myth: 'Daily wage workers are excluded', reality: 'Daily wage and contract workers are covered.' },
                { myth: 'Women can be paid less', reality: 'Equal pay is mandatory.' },
                { myth: 'Minimum wage is optional', reality: 'Employers must pay minimum wages.' },
                { myth: 'Workers must apply to get benefits', reality: 'It is a legal obligation on employers.' }
            ]
        }
    },
    {
        id: 'pmfby-scheme',
        categoryId: 'farmers',
        title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        description: 'Crop insurance scheme protecting farmers from natural disaster losses.',
        verified: true,
        labels: {
            benefits: 'Who can apply or claim benefits?',
            eligibility: 'Pre-requisites',
            process: 'Official application URL'
        },
        simplified: {
            summary: [
                'This is a crop insurance scheme for farmers.',
                'Protects farmers from crop loss due to natural disasters.',
                'Covers risks from sowing to harvest.',
                'Farmers pay very low premium.',
                'Government pays most of the insurance cost.',
                'Claims are paid directly to bank accounts.',
                'Uses technology and satellites to assess losses.',
                'Available for loanee and non-loanee farmers.',
                'Helps farmers stay financially stable.'
            ],
            benefits: [
                'All farmers',
                'Sharecroppers and tenant farmers (as notified)'
            ],
            eligibility: [
                'Crop must be notified under PMFBY',
                'Aadhaar, land records, bank account',
                'Apply within cut-off dates'
            ],
            process: [
                'https://pmfby.gov.in',
                '(Apply via banks, CSCs, or portal)'
            ],
            faqs: [
                {
                    question: 'How much premium do farmers pay?',
                    answer: '2% (Kharif), 1.5% (Rabi), 5% (commercial crops).'
                },
                {
                    question: 'Does it cover floods and droughts?',
                    answer: 'Yes.'
                },
                {
                    question: 'Is Aadhaar mandatory?',
                    answer: 'Yes.'
                },
                {
                    question: 'How are claims calculated?',
                    answer: 'Using yield data and technology.'
                },
                {
                    question: 'Is it compulsory?',
                    answer: 'Optional for most farmers.'
                }
            ],
            misconceptions: [
                { myth: 'Crop insurance covers 100% losses', reality: 'Compensation depends on official loss assessment.' },
                { myth: 'Only bank loan farmers can apply', reality: 'Non loanee farmers can also apply.' },
                { myth: 'Premium is very expensive', reality: 'Farmers pay very low premium (1.5%–5%).' },
                { myth: 'Claims are always delayed', reality: 'Claims are paid after verification, often directly to bank accounts.' },
                { myth: 'All crops are automatically covered', reality: 'Only notified crops are covered.' }
            ]
        }
    },
    {
        id: 'nyp-2014',
        categoryId: 'students',
        title: 'National Youth Policy (NYP), 2014',
        description: 'A holistic framework for youth development in India.',
        verified: true,
        simplified: {
            summary: 'A policy framework to empower youth (15-29 years) and ensure their participation in nation-building.',
            benefits: [
                'Focus on education, employment, and skill development.',
                'Promotes social values and community engagement.',
                'Supports health and sports lifestyle.'
            ],
            eligibility: [
                'Youth aged 15-29 years.',
                'All sections of society including marginalized groups.'
            ],
            process: 'Implemented through various ministries and state schemes. No single application.',
            misconceptions: [
                { myth: 'Youth can apply for money under NYP', reality: 'It is a policy framework, not a cash scheme.' },
                { myth: 'Only students benefit', reality: 'It covers all youth (15–29 years).' },
                { myth: 'There is one application portal', reality: 'Benefits come via many different schemes.' },
                { myth: 'It is outdated and useless', reality: 'It still guides youth programmes.' },
                { myth: 'Only central government implements it', reality: 'States also play a key role.' }
            ]
        },
        eligibilityCriteria: {
            minAge: 15,
            maxAge: 29,
            occupations: ['students'],
            states: ['All'],
            incomeRange: 'any'
        }
    },
    {
        id: 'skill-india',
        categoryId: 'students',
        title: 'Skill India Mission',
        description: 'Free Skill Training Programs to Improve Employability',
        verified: true,
        labels: {
            benefits: 'Major Benefits',
            eligibility: 'Who Can Apply?',
            process: 'How Does It Work?'
        },
        simplified: {
            summary: [
                'Skill India Mission is a flagship initiative by the Government of India aimed at empowering youth with industry-relevant skills.',
                'It focuses on training people so they can get jobs, better wages, or start their own work.',
                'It bridges the gap between education and employment by offering free or low-cost skill training.',
                'Key Objectives: Improve employability, provide practical skills, support entrepreneurship, and build a skilled workforce.',
                'Why Skill India Matters: Helps citizens become self-reliant and supports India\'s economic growth.',
                'Important Note: Skill India is an umbrella mission. Benefits are delivered through multiple schemes like PMKVY and sector-specific programs.'
            ],
            benefits: [
                'Free skill training in multiple sectors (IT, Healthcare, Retail, Manufacturing, etc.)',
                'Hands-on, practical learning aligned with market demand',
                'Government-recognized certificates and job placement assistance',
                'Support for self-employment and entrepreneurship guidance',
                'Popular Skill Areas: Digital Skills, IT, Healthcare, Beauty, Construction, and more.'
            ],
            eligibility: [
                'Indian citizens',
                'Youth aged 15–45 years (varies by scheme)',
                'School dropouts, students, graduates, and unemployed individuals',
                'Women, rural youth, and marginalized groups are encouraged'
            ],
            process: [
                'Enroll through an approved training center or official portal.',
                'Complete free training provided by certified institutes.',
                'Clear assessment to receive government certification.',
                'Placement support or entrepreneurship guidance after completion.',
                'Official Skill India Link: https://www.skillindia.gov.in (Main portal for training programs and authorized centers)'
            ],
            faqs: [
                {
                    question: 'Is there any fee for the courses?',
                    answer: 'No training fee for most courses. Major schemes like PMKVY are fully government-funded.'
                }
            ],
            misconceptions: [
                { myth: 'Only technical students can apply', reality: 'Anyone with basic education can apply for relevant courses.' },
                { myth: 'No jobs after training', reality: 'Many programs include dedicated placement support.' },
                { myth: 'Only urban youth benefit', reality: 'There is a strong focus on rural and semi-urban areas.' }
            ]
        },
        eligibilityCriteria: {
            minAge: 15,
            maxAge: 45,
            occupations: ['students', 'workers'],
            states: ['All'],
            incomeRange: 'any'
        }
    }
];
