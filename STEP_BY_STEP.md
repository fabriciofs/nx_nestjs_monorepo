# Step-by-step Guide to Setting Up the Project

Follow the instructions below to set up the project:

1. Install nx globally:

```bash
npm install -g nx
```

2. Create a new nx workspace:

```bash
npx create-nx-workspace@latest --allPrompts=true

  - Where would you like to create your workspace? · packages
  - Which stack do you want to use? · node
  - What framework should be used? · nest
  - Standalone project or integrated monorepo? · integrated
  - Application name · cloud
  - Would you like to generate a Dockerfile? [https://docs.docker.com/] · Yes
  - Which package manager to use · npm
  - Main branch name · main
  - Enable distributed caching to make your CI faster · No
```

After these prompts, navigate to your workspace:

```bash
cd packages 
```

3. Generate a nest application:

```bash
nx generate @nrwl/nest:application local
```

4. Generate a node library:

```bash
nx generate @nrwl/node:library entities
```

5. Install the necessary packages:

```bash
npm install @nestjs/typeorm typeorm pg @nestjs/swagger class-transformer class-validator
```

Note: You only need to install the packages once from the 'packages' directory, and they will be available for all projects.
