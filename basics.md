# zl notes
name 
    |_page.tsx
    |_page2.tsx

every time we create a new route, just make a new folder (route name as its name), and put files inside.

client components:
useState, onClick, onChange...

server component:
fetch data, sensitive info

by default, every component is server side components.
```
"use client";
```
on the top 

## dynamic route
import the useRouter, destructure the useRouter -> push function.
allows us to redirect to another page depending whatever input value we have submitted. (under /prediction/ folder)
```
import { useRouter } from "next/navigation";

const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };
```

## API usage

1. fetch the data from api (async)
2. pass the data into Promise
3. destructure and make a list of data
   