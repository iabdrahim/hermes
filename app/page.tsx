"use client";
import React, { useState } from "react";
const fetcher = async (url: string) => {
  let res = await fetch(url);
  let json = await res.json();
  return json;
};
import useSwr from "swr";
import moment from "moment";
import "./home.scss";

export default function LetterForm() {
  let [email, setM] = useState("");
  let [date, setD] = useState("");
  let [content, setC] = useState("");
  let [title, setT] = useState("");
  let handleSubmit = async (e: any) => {
    console.log(date.replaceAll("-", "/"));
    let req = await fetch("/api/letters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        letter: content,
        email: email,
        toDate: date.replaceAll("-", "/"),
      }),
    });
    let data = req.json();
    console.log(data);
  };
  let { data, error } = useSwr("/api/letters?all", fetcher);
  let getDate = (d: string) => {
    console.log(
      `${moment().year()}/${moment().month()}/${moment().day()}` ==
        `${moment(d).year()}/${moment(d).month()}/${moment(d).day()}`
    );
    return `${moment(d).year()}/${moment(d).month()}/${moment(d).day()}`;
  };
  let HandleDelete = async (id: string) => {
    let req = await fetch("/api/letters", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    let data = req.json();
    console.log(data);
  };
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <textarea
            id=""
            name="letter"
            value={content}
            placeholder={"enter a good letter"}
            onChange={(e) => setC(e.target.value)}
          ></textarea>
        </div>
        <section>
          <input
            type="text"
            name="title"
            value={title}
            placeholder={"enter a good title"}
            onChange={(e) => setT(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setM(e.target.value)}
          />

          <input
            type="date"
            placeholder="date"
            name=""
            value={date}
            onChange={(e) => setD(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </section>
      </form>
      <main className="ltrs">
        <ul>
          {data
            ? data.data?.map((l: any) => (
                <li key={l._id}>
                  {l.content}- <span>{getDate(l.Date)}</span>
                  <button onClick={(e) => HandleDelete(l._id)}>delete</button>
                </li>
              ))
            : "loading"}
        </ul>
      </main>
    </>
  );
}
