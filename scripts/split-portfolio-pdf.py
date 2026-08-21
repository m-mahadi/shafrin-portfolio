from pathlib import Path

from pypdf import PdfReader, PdfWriter


SOURCE = Path("review/shafrin-portfolio-source.pdf")
OUTPUT = Path("public/pdf")

PROJECTS = {
    "safe-air.pdf": (21, 29),
    "karmas-child-dress-making.pdf": (40, 50),
    "wes-anderson-in-colour.pdf": (30, 35),
    "unique-creator-of-colours.pdf": (36, 39),
    "breaking-the-silence.pdf": (104, 111),
    "admission-apprehension.pdf": (8, 18),
    "report-of-the-forbidden-voice.pdf": (136, 162),
    "an-old-age-homes-story.pdf": (19, 20),
    "konakhola-participatory-research.pdf": (76, 93),
    "preventing-gender-based-violence.pdf": (57, 75),
    "illusory-perception.pdf": (51, 56),
    "earthquake-preparedness-puran-dhaka.pdf": (112, 135),
    "the-doyel-laptop-project.pdf": (94, 103),
    "new-gatekeepers.pdf": (163, 166),
}


reader = PdfReader(SOURCE)
OUTPUT.mkdir(parents=True, exist_ok=True)

for filename, (first, last) in PROJECTS.items():
    writer = PdfWriter()
    for page_number in range(first - 1, last):
        writer.add_page(reader.pages[page_number])
    with (OUTPUT / filename).open("wb") as output:
        writer.write(output)
    print(f"{filename}: {last - first + 1} pages")
