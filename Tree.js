$( document ).ready(function() {
    console.log( "ready! for render" );
    
datajson = {
    "name": "University of Georgia",
    "attribute": "univ",
    "children": [
        {
            "name": "President",
            "attribute": "admin",
            "children": [
                {
                    "name": "Athletics",
                    "attribute": "admin"
                },
               
                {
                    "name": "Legal Affairs/General Counsel",
                    "attribute": "admin"
                },
                {
                    "name": "Equal Opportunity Office",
                    "attribute": "admin"
                },
                {
                    "name": "Internal Auditing Division",
                    "attribute": "admin"
                },
                {
                    "name": "Development and Alumni Relations",
                    "attribute": "admin"
                },
                {
                    "name": "Finance and Administration",
                    "attribute": "admin"
                },
                {
                    "name": "Marketing and Communication",
                    "attribute": "admin"
                },
                {
                    "name": "Student Affairs",
                    "attribute": "admin"
                },
                {
                    "name": "Government Relations",
                    "attribute": "admin"
                }
            ]
        },{
            "name": "Senior Vice President for Academic Affairs and Provost",
            "attribute": "admin",
            "children": [
                {
                    "name": "Franklin College of Arts and Sciences",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "Biological Sciences",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Biochemistry and Molecular Biology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Cellular Biology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Genetics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Marine Sciences",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Microbiology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Plant Biology",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "Fine Arts",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Lamar Dodd School of Art",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Dance",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Hugh Hodgson School of Music",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Theatre and Film Studies",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "Humanities",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Classics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Comparative Literature",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "English",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Germanic and Slavic Languages",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "History",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Linguistics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Philosophy",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Religion",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Romance Languages",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "Physical and Mathematical Sciences",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Chemistry",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Computer Science",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Geology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Mathematics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Physics and Astronomy",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Statistics",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "Social Sciences",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Anthropology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Communication Studies",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Geography",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Psychology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Sociology",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Center for Archaeological Sciences",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Asian Studies",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Computational Chemistry",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Metalloenzyme Studies",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Simulational Physics",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Virtual History",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Regents Center for Learning Disorders",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Georgia Electron Microscopy",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Center for Geospatial Research",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Center for Integrative Conservation Research",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Willson Center for the Humanities and Arts",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Institute for African American Studies",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "African Studies Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Institute for Artificial Intelligence",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Institute of Native American Studies",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Institute for Women's Studies",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Latin American and Carribean Studies Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Owens Institute for Behavioral Research",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Institute of Bioinformatics",
                                    "attribute": "blank"
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    "name": "AU/UGA Medical Partnership",
                    "attribute": "acad"
                },
                {
                    "name": "Terry College of Business",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Economics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Entreprenuership",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Finance",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Insurance, Legal Studies, and Real Estate",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "International Business",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Leadership Advancement",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Management",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Marketing",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Management Information Systems",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Music Business",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "J.M. Tull School of Accounting",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Bonbright Center for the Study of Regulation",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Selig Center for Economic Growth",
                                    "attribute": "cent"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "College of Agriculture and Environmental Sciences",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Institute for Plant Breeding, Genetics, Genomics",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Center for Agribusiness and Economic Development",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Food Safety",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Georgia Center for Urban Agriculture",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Applied Genetic Technology Center",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Invasive Species and Ecosystem Health",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Food Product Innovation and Commercialization Center",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Regenerative Bioscience Center",
                                    "attribute": "cent"
                                }
                            ]
                        },
                        {
                            "name": "CAES - Cooperative Extension Services",
                            "attribute": "admin",
                            "children": [
                                {
                                    "name": "ADSC - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "CRSS - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ENTO - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "FDST - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "HORT - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "PATH - Cooperative Extension Services",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "POUL - Cooperative Extension Services",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "CAES - Experiment Stations",
                            "attribute": "admin",
                            "children": [
                                {
                                    "name": "ADSC - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ADSC - Resaerch Coastal",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ADSC - Research Georgia Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "CRSS - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "CRSS - Research Coastal Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "CRSS - Research Georgia Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ENTO - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ENTO - Research Coastal Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "ENTO - Research Georgia Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "HORT - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "HORT - Research Coastal Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "HORT - Research Georgia Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "PATH - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "PATH - Research Coastal Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "PATH - Research Georgia Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "POUL - Research College Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "POUL - Research Coastal Station",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "POUL - Research Georgia Station",
                                    "attribute": "acad"
                                }
                            ]
                        },
                        {
                            "name": "CAES - Instruction",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Agricultural and Applied Economics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Agriculture Leadership, Education, and Communication",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Animal and Dairy Science",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Crop and Soil Sciences",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Entomology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Food Science and Technology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Horticulture",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Plant Pathology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Poultry Science",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Griffin Campus",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Tifton Campus",
                                    "attribute": "acad"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "College of Environment and Design",
                    "attribute": "acad"
                },
                {
                    "name": "College of Education",
                    "attribute": "acad",
                            "children": [
                                {
                                    "name": "",
                                    "attribute": "acad",
                                    "children": [
                                        {
                                            "name": "Career & Information Studies",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Communicate Sciences & Special Education",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Counseling and Human Development Sciecnes",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Educational Psychology",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Educational Theory and Practice",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Kinesiology",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Language and Literacy Education",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Lifelong Education, Administration, and Policy",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Math and Science Education",
                                            "attribute": "acad"
                                        },
                                        {
                                            "name": "Center for Autism and Behavioral Education Research",
                                            "attribute": "cent"
                                        },
                                        {
                                            "name": "Center for Latino Achievement and Success in Education",
                                            "attribute": "cent"
                                        },
                                        {
                                            "name": "Center for Physical Activity and Health",
                                            "attribute": "cent"
                                        },
                                        {
                                            "name": "Georgia Center for Assessment",
                                            "attribute": "cent"
                                        },
                                        {
                                            "name": "Torrance Center for Creativity and Talent Development",
                                            "attribute": "cent"
                                        }
                                    ]
                                }
                            ]
                },
                {
                    "name": "Odum School of Ecology",
                    "attribute": "acad"
                },
                {
                    "name": "College of Engineering",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Chemical, Materials, and Biomedical Engineering",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Electrical and Computer Engineering",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Environmental, Civil, Argircultural, and Mechanical Engineering",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Engineering Edcuation Transformations Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Institute for Resilient Infrastructure Systems",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Georgia Informatics Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "New Materials Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Center for Cyber-Physical Systems",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Phenomics and Plant Robotics Center",
                                    "attribute": "cent"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "College of Family and Consumer Sciences",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Financial Planning, Housing, and Consumer Economics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Foods and Nutrition",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Human Development and Family Sciences",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Textiles, Merchandising, and Interiors",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "FACS Education",
                                    "attribute": "blank"
                                },
                                {
                                    "name": "Institute for Human Development and Disability",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Aspire Clinic",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Child Development Lab",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Family and Community Resilience",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Human Development and Disability",
                                    "attribute": "cent"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Warnell School of Forestry and Natural Resources",
                    "attribute": "acad"
                },
                {
                    "name": "Graduate School",
                    "attribute": "admin"
                },
                {
                    "name": "Grady College of Journalism and Mass Communications",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Advertising and Public Relations",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Entertainment and Media Studies",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Journalism",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "New Media Institute",
                                    "attribute": "inst"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "School of Law",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Rusk Internationl Law Center",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Institute for Continuing Judicial Education",
                                    "attribute": "inst"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "College of Pharmacy",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Clinical and Administrative Pharmacy",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Pharmaceutical and Biomedical Sciences",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "International Biomedical Regulatory Science",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "UGA Center for Drug Discovery",
                                    "attribute": "cent"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "School of Public Health",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Environmental Health Science",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Epidemiology and Biostatistics",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Health Policy and Management",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Health Promotion and Behavior",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Institute of Disaster Management",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Institute of Gerontology",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Global Health Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Health Informatics Institute",
                                    "attribute": "inst"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "School of Social Work",
                    "attribute": "acad"
                },
                {
                    "name": "School of Public and International Affairs",
                    "attribute": "acad",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "International Affairs",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Political Science",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Public Admin and Policy",
                                    "attribute": "acad"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Libraries",
                    "attribute": "admin"
                },
                {
                    "name": "Office of Global Engagement",
                    "attribute": "admin"
                },
                {
                    "name": "Honors Program",
                    "attribute": "admin"
                },
                {
                    "name": "Diversity and Inclusion and Strategic University Initiatives",
                    "attribute": "admin"
                },
                {
                    "name": "College of Veterinary Medicine",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Infectious Diseases",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Large Animal Medicine",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Pathology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Physiology and Pharmacology",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Population Health",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Small Animal Medicine and Surgery",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Biosciences and Diagnostic Imaging",
                                    "attribute": "acad"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Vice President for Instruction",
                    "attribute": "admin"
                },
                {
                    "name": "Enterprise Information Technology Services",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Office of Institutional Research",
                                    "attribute": "acad"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Public Service and Outreach",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Archway Partnership",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "State Botanical Garden of Georgia",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Carl Vinson Institute of Government",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "UGA Center for Continuing Education and Hotel",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "J.W. Fanning Institute for Leadership Development",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Marine Extension and Georgia Sea Grant",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Office of Service Learning",
                                    "attribute": "acad"
                                },
                                {
                                    "name": "Small Business Development Center",
                                    "attribute": "acad"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Office of Research",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "acad",
                            "children": [
                                {
                                    "name": "Biomedical and Health Science Institute",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Cancer Center",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Family Research",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Tropical and Emerging Global Diseases",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Clinical and Translational Research Unit",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Complex Carbohydrate Research Center",
                                    "attribute": "cent"
                                },
                                {
                                    "name": "Center for Applied Isotope Studies",
                                    "attribute": "cent"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Vice Provost for Academic Affairs (Marisa Pagnattaro)",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "admin",
                            "children": [
                                {
                                    "name": "Georgia Museum of Art",
                                    "attribute": "admin"
                                },
                                {
                                    "name": "Institute of Higher Education",
                                    "attribute": "inst"
                                },
                                {
                                    "name": "Performing Arts Center",
                                    "attribute": "admin"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Associate Vice Provost for Academic Affairs and Chief of Staff (Meg Amstutz)",
                    "attribute": "admin",
                    "children": [
                        {
                            "name": "",
                            "attribute": "admin",
                            "children": [
                                {
                                    "name": "Accreditation and Institutional Effectiveness",
                                    "attribute": "admin"
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Academic Fiscal Affairs (Chris Miller)",
                    "attribute": "admin"
                },
                {
                    "name": "Faculty Affairs",
                    "attribute": "admin"
                }
                
                
            ]
        }
    ]
}; 

// Get JSON data
var treeJSON = d3.json(datajson, function (error, treeData) { //from external file
//d3.tsv("stocks.tsv", type, function(error, data) {//for tsv external file

 
    console.log(datajson);
    treeData = datajson;
    console.log(treeData);

    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // panning variables
    var panSpeed = 100;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;
    //color
    var blue = '#337ab7', //acad
            green = '#5cb85c', //inst
            red = '#ff6361', //univ
            yellow = '#f0ad4e', //admin
            blank = '#C6CBEF', //blank
            purple = '#9467bd'; //cent
            
    var drkblue = '#115895', //acad
            drkgreen = '#3a963a', //inst
            drkred = '#ff6341', //univ
            drkyellow = '#d08b2c', //admin
            drkblank = '#a4a9cd', //blank
            drkpurple = '#72459b'; //cent


    // size of the diagram
    var viewerWidth = $(document).width();
    var viewerHeight = $(document).height();

    var tree = d3.layout.tree()
            .size([viewerHeight, viewerWidth]);

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

    // A recursive helper function for performing some setup by walking through all nodes

    function visit(parent, visitFn, childrenFn) {
        if (!parent)
            return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function (d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function (d) {
        return d.children && d.children.length > 0 ? d.children : null;
    });


    // sort the tree according to the node names

    function sortTree() {
        tree.sort(function (a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree();

    // TODO: Pan function, can be better implemented.

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function () {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable contain

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }


    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);



    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#mytree").append("svg")
            .attr("width", viewerWidth)
            .attr("height", viewerHeight)
            .attr("class", "overlay")
            .call(zoomListener);


    //  Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3.behavior.drag();///removing this stops render??????

    // Helper functions for collapsing and expanding nodes.

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }



    // Function to center node when clicked so node doesn't get lost when collapsing with large amount of children.

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 4;//moving to left 4. if 2 then to the center. if 1 then to the right
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
                .duration(duration)
                .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Toggle children function

    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    // Toggle children on click.

    function click(d) {
        if (d3.event.defaultPrevented)
            return; // click suppressed
        d = toggleChildren(d);
        update(d);
        centerNode(d);
    }

    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function (level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1)
                    levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function (d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line  
        tree = tree.size([newHeight, viewerWidth]);
		
		
		//legends
		var legendbox = baseSvg.append("rect")
		.style("fill-opacity", 0)
		.style("stroke", 'ccc')
                .style("stroke-width", 1.5)
		.attr("width", 130)
		.attr("x", 5)
		.attr("y", 5)
		.attr("height", 180)
		
		var legend1 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",20)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", red);
		var text1 = baseSvg.append("text")
			.attr("dy", "23")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("University");
        
        var legend2 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",40)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", yellow);
		var text2 = baseSvg.append("text")
			.attr("dy", "43")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Administration");
        
        var legend3 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",60)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", blue);
		var text3 = baseSvg.append("text")
			.attr("dy", "63")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Academic");
        
        var legend4 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",80)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", green);
		var text4 = baseSvg.append("text")
			.attr("dy", "83")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Institute");
        
        var legend5 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",100)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", purple);
		var text5 = baseSvg.append("text")
			.attr("dy", "103")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Center");
        
        var legend6 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .attr("cy",120)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", blank);
		var text6 = baseSvg.append("text")
			.attr("dy", "123")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Unknown");
                
       var legend7 = baseSvg.append("circle")
                .attr('class', 'nodeCircle')
                .style("stroke", drkred)
                .style("stroke-width", 2.5)
        		.attr("cy",150)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", yellow);
		var text7 = baseSvg.append("text")
			.attr("dy", "153")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("Has Child");
        
        var legend8 = baseSvg.append("circle")
        		.attr('class', 'nodeCircle')
        		.style("stroke", red)
                .style("stroke-width", 2.5)
        		.attr("cy",170)
                .attr("cx",20)
                .attr("r", 6)
                .style("fill", 'fff');
		var text8 = baseSvg.append("text")
			.attr("dy", "173")
			.attr("dx", "40")
            .style("font-family", "sans-serif")
        	.style("font-size", "10")
        	.text("No Child");
                
    
        
		
		
        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
                links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function (d) {
            d.y = (d.depth * (maxLabelLength * 5)); //maxLabelLength * 10px//10px distance between two level will increase
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        node = svgGroup.selectAll("g.node")
                .data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
                .call(dragListener)
                .attr("class", "node")
                .attr("transform", function (d) {
                    return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on('click', click);

        nodeEnter.append("circle")
                .attr('class', 'nodeCircle')
                .attr("r", 0)
                .style("fill", function (d) {
                    var col="lightsteelblue";
                    if (d.attribute === 'univ')
                        col = red;
                    if (d.attribute === 'acad')
                        col = blue;
                    if (d.attribute === 'inst')
                        col = green;
                    if (d.attribute === 'admin')
                        col = yellow;
                    if (d.attribute === 'cent')
                        col = purple;
                    if (d.attribute === 'blank')
                        col = blank;
                    //console.log(d.attribute);
                    return d._children ? col : "#fff";
                });

        nodeEnter.append("text")
                .attr("x", function (d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("dy", ".35em")
                .attr('class', 'nodeText')
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                })
                .style("fill-opacity", 0);

        // Update the text to reflect whether node has children or not.
        node.select('text')
                .attr("x", function (d) {
                    return d.children || d._children ? -10 : 10;
                })
                .attr("text-anchor", function (d) {
                    return d.children || d._children ? "end" : "start";
                })
                .text(function (d) {
                    return d.name;
                });

        // Change the circle fill depending on whether it has children and is collapsed///work here for color coding of ring
        node.select("circle.nodeCircle")
                .attr("r", 4)
                .style("fill", function (d) {
                    var col="lightsteelblue";
                    if (d.attribute === 'univ')
                        col = red;
                    if (d.attribute === 'acad')
                        col = blue;
                    if (d.attribute === 'inst')
                        col = green;
                    if (d.attribute === 'admin')
                        col = yellow;
                    if (d.attribute === 'cent')
                        col = purple;
                    if (d.attribute === 'blank')
                        col = blank;
                    //console.log(d.attribute);
                    return d._children ? col : "#fff";
                })
                .style("stroke", function (d) {
                    var col="lightsteelblue";
                    if (d.attribute === 'univ')
                        col = "red";
                    if (d.attribute === 'acad')
                        col = drkblue;
                    if (d.attribute === 'inst')
                        col = drkgreen;
                    if (d.attribute === 'admin')
                        col = drkyellow;
                    if (d.attribute === 'cent')
                        col = drkpurple;
                    if (d.attribute === 'blank')
                        col = drkblank;
                    //console.log(d.attribute);
                    return  col;
                });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                });

        // Fade the text in
        nodeUpdate.select("text")
                .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function (d) {
                    return "translate(" + source.y + "," + source.x + ")";
                })
                .remove();

        nodeExit.select("circle")
                .attr("r", 0);

        nodeExit.select("text")
                .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
                .data(links, function (d) {
                    return d.target.id;
                });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function (d) {
                    var o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });

        // Transition links to their new position.
        link.transition()
                .duration(duration)
                .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
                .duration(duration)
                .attr("d", function (d) {
                    var o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                })
                .remove();

        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    // Define the root
    root = treeData;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;

    // Collapse all children of roots children before rendering.
    root.children[1].children.forEach(function (child) {
        collapse(child);
    });

    // Layout the tree initially and center on the root node.
    update(root);
    centerNode(root);
    
}); 
});