# Contributing to Math & Matter

Thanks for wanting to contribute! This project is meant to be a shared learning vault for physics and mathematics. Please follow these steps so everything stays consistent.

---

## 1. Getting Started

1. **Fork the repo** → make your own copy under your GitHub account.
2. **Create A Obsdidian Vault (If Applicable)** → Create an [Obsdidian](https://obsidian.md/) vault for this Project
3. **Clone it locally** → open it as an Obsidian vault.  
4. **Set up the structure:**
   - Put the `.obsidian` folder from this repo into your vault’s `.obsidian`. (**Optional**, has shortcuts and plugins)
     - On macOS, reveal hidden folders with `Cmd + Shift + .`  
   - Copy the `Z_template/` folder into your local vault (**Required**)
     - This folder contains the note-writing template and a README file on tips to write concepts, and general templates
5. **Set up Strucuture for Updating Exisiting Concepts**
   - Put the `Mathematics Concepts` & `Physics Concepts` folder into your local vault 
---

## 2. Branch Naming

When you create a branch, please use one of these styles:

- `math/<concept-name>` → for math-related notes  
- `physics/<concept-name>` → for physics-related notes  
- `update/<concept-or-folder>` → for fixes or reorganizing  

Example:  
- `physics/gauss-law`  
- `math/integration-by-parts`  
- `update/vector-spaces`

---

## 3. Writing New Concepts

- Use the template in `Z_template/` to create new concept notes.  
- Keep one major concept per note.  
- Use Markdown headings, equations, and backlinks where useful.  
- Link related concepts within the vault whenever possible.  

---

## 4. Expanding on Concepts (Finding Work)

- Concepts under Mathematics Concepts / Physics Concepts likely need changes the specifics are labelled in the Issue Tab
- Update the concept using Markdown & Latex (In Obsdidian)


## 5. Commits

Use clear, consistent commit messages:

- `physics/gauss-law – added derivation`  
- `math/integration-by-parts – clarified example`  
- `update/vector-spaces – fixed typos and added diagram`

---

## 6. Pull Requests

- Always submit changes through a Pull Request (PR)
- Adding new notes should be in their respective folder (Physics concepts in Physics Concept Folder) make a new folder if needed
- In the PR description, explain:
  - What concept(s) you added or updated  
  - Why the change helps the vault  
- Small, focused PRs are better than huge ones.

---

## 7. Reporting Issues

- For **errors in notes** → open an Issue and describe the problem clearly.  
- For **feature requests** → open an Issue tagged as `enhancement`.  

---

## 8. Code Style

- Notes are written in **Markdown**, refer to [README in Template](https://github.com/rajeevphysics/Obsidian-MathMatter/tree/contrib/Templates/Z_Templates) for how to write
- Equations should use standard **LaTeX math mode** (`$...$` for inline, `$$...$$` for block).  
- Keep headings consistent:  
  - `# Concept Name`  
  - `## Subsection`  
- Use lists and callouts for clarity.

---

## 9. Ethical Use of AI
Please read the [AI_GUIDELINES](https://github.com/rajeevphysics/Obsidian-MathMatter/blob/contrib/AI_GUIDELINES.md) for how to use AI with this project
In short:
- AI **can be used** to help draft explainations, write LaTeX blocks, code or double check math equations 
   - Using AI in this way should be **DOUBLE CHECKED** for accuracy 
- AI **should not be used** to write full explanations, bypass closed sources such as textbook, articles or blogs

## 10. Ethical Attrubtions 
To keep this project accurate and legally safe:

1. **Definitions and Examples**
   - If you take a **definition** directly from a textbook, paper, or online source, you must reference it.  
   - If you use an **example** or problem statement from another source, you must also reference it.

2. **How to Reference**
   - Use a Markdown footnote or inline link at the end of the sentence.  
   - Example with footnote:  
     > A vector space is a set of elements with two operations, addition and scalar multiplication, satisfying certain axioms.[^1]  
     > [^1]: Axler, *Linear Algebra Done Right*, 3rd ed., Springer, 2015.
   - To create footnotes refer to [Obsidian Help Page](https://help.obsidian.md/syntax#Footnotes)

3. **Licensing Rules**
   - Only use sources that **allow reuse** under their license:
     - Open Educational Resources (OER) with a Creative Commons license  
     - Public domain works  
     - Materials you created yourself  
   - Do **not** copy from textbooks or websites that prohibit reuse (most commercial textbooks). Instead, **paraphrase in your own words** and then reference.

4. **When in Doubt**
   - If you’re unsure whether you can reuse a definition or example, **paraphrase** it in your own words and link to the source instead of copying.
   - Always err on the side of giving credit.

## 11. Code of Conduct

Please read the [Code of Conduct](CODE_OF_CONDUCT.md).  
In short:
- Be respectful in discussions and contributions.  
- If you use these notes in your own projects, please **credit this project** and include my [Buy Me a Coffee link](https://buymeacoffee.com/rajeevproject) and link to the [main website](mathandmatter.com) 
- Don’t copy without attribution. 

---

Thanks again for contributing! 🚀
