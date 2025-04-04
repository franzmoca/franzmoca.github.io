---

layout: portfolio_post  
title: UniversalPlot  
category: portfolio  
modal-id: 9  
img: math.png  
alt: Screenshot of Wolfram Mathematica  
overview:  
    client: Academic Project  
    applications: Function Sonifier and Visual Aid Tool  
    project-date: May 2017 - June 2017  
    summary: UniversalPlot is a Wolfram Mathematica package designed to enhance accessibility in learning mathematics. The tool features function "sonification," providing unique auditory representations of mathematical functions, along with textual descriptions, aimed at supporting blind and visually impaired learners.

skills:  
    languages:  
    - Wolfram Mathematica  
    - Java  
    concepts:  
    - Accessibility  
    - Universal Design  
    - Educational Software  
    tools:  
    - Wolfram Mathematica  
    - Math Description Engine  
    stack:  
    - Linux

---

### Project Description

**UniversalPlot** is a specialized package developed as part of a Computational Mathematics exam in May-June 2017. The primary goal of this project was to create a tool that aids in the learning of mathematics by making mathematical functions more accessible to individuals with visual impairments.

The package’s standout feature is **function sonification**, which converts mathematical functions into unique sounds that represent their behavior. This allows users, particularly those who are blind or visually impaired, to "hear" the properties of a function, such as its slope, curvature, and periodicity. Additionally, UniversalPlot can generate textual descriptions of function plots, further enhancing its utility as an educational tool.

UniversalPlot is built on top of the [Math Description Engine](https://github.com/benetech/Inactive-Math-Description-Engine){:target="_blank"}, a Java library developed by NASA for the MathTrax project. This engine provides the necessary backend for generating textual and auditory descriptions of mathematical plots, which are then wrapped and made accessible through the Wolfram Mathematica environment.

### Contributions

Key contributions to the **UniversalPlot** project included:

- **Developing the Wolfram Mathematica Package:** Designed and implemented the Mathematica package that interfaces with the Math Description Engine.
- **Integrating Function Sonification:** Enabled the conversion of mathematical functions into auditory signals, providing a novel way for visually impaired users to engage with mathematical content.
- **Enhancing Accessibility:** Focused on universal design principles to ensure the package could be a valuable educational tool for users with disabilities.

### Challenges Overcame

Several challenges were encountered during the development of **UniversalPlot**:

- **Integration with External Libraries:** Successfully interfacing the Wolfram Mathematica environment with the Math Description Engine, a Java-based library, required careful management of cross-language compatibility.
- **Ensuring Accurate Sonification:** Developing accurate auditory representations of complex mathematical functions while maintaining clarity and distinction between different function types.
- **User Experience Design:** Creating an interface within Mathematica that is both intuitive and accessible to users, particularly those with visual impairments.

### Accomplishments

The **UniversalPlot** project achieved several key milestones:

- **Academic Success:** The project was successfully completed and presented as part of the Computational Mathematics exam, demonstrating the feasibility and effectiveness of using sonification for mathematical functions.
- **Accessibility Innovation:** Introduced an innovative way for blind and visually impaired individuals to learn and interact with mathematical content.
- **Contributions to Open Source:** By leveraging the open-source Math Description Engine, UniversalPlot stands as an example of how existing technologies can be adapted to create accessible educational tools.
