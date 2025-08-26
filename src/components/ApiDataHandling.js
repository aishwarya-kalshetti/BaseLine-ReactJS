// src/components/ApiDataHandling.js
import React, { useEffect, useState } from "react";
import "../App.css";

function ApiDataHandling() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setError("");
      setLoading(true);
      // Demo API (public): you can replace with your own endpoint
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setUsers(data.slice(0, 5)); // keep it short
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="component-wrapper">
      {/* Theory */}
      <div className="theory-container">
        <h2 className="section-title">📘 Theory (API & Data Handling)</h2>
        <ul>
          <li>Use <b>useEffect</b> for fetching on mount or when deps change.</li>
          <li>Track <b>loading</b> and <b>error</b> states for good UX.</li>
          <li>Clean up ongoing requests if needed (AbortController).</li>
        </ul>
      </div>

      {/* Implementation */}
      <div className="implementation-container">
        <h2 className="section-title">⚡ Implementation</h2>
        <pre className="code-block">{`
function MyData() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("/api/items");
        const data = await res.json();
        if (!ignore) setItems(data);
      } catch (e) {
        if (!ignore) setError("Failed to fetch");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; }; // simple cleanup flag
  }, []);
}
        `}</pre>
      </div>

      {/* Demo */}
      <div className="demo-box demo-form">
        <h2 className="section-title">🚀 Demo (Fetch Users)</h2>

        <div>
          <button onClick={fetchUsers}>Reload</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

        {!loading && !error && (
          <div style={{ marginTop: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f5f7ff" }}>
                  <th style={th}>Name</th>
                  <th style={th}>Email</th>
                  <th style={th}>City</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td style={td}>{u.name}</td>
                    <td style={td}>{u.email}</td>
                    <td style={td}>{u.address?.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

const th = { textAlign: "left", padding: "10px", borderBottom: "1px solid #e5e7eb" };
const td = { padding: "10px", borderBottom: "1px solid #f0f0f0" };

export default ApiDataHandling;
