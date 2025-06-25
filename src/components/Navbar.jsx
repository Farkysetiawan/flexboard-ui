import { useState, useRef } from "react";
import { BsPerson } from "react-icons/bs";
import { useClickAway } from "react-use";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);

  /* klik di luar menutup dropdown */
  useClickAway(boxRef, ()=> setOpen(false));

  return(
    <header className="topbar" ref={boxRef}>
      <h1 className="topbar-title mb-0">FlexBoard</h1>

      {/* avatar + dropdown */}
      <div className="position-relative">
        <img
          src="https://i.pravatar.cc/100?img=12"  /* ganti dgn foto user */
          alt="avatar"
          className="avatar"
          onClick={()=> setOpen(o=>!o)}
        />
        {open && (
          <ul className="dropdown-menu dropdown-menu-end show mt-2">
            <li><button className="dropdown-item disabled">Signed in as <br/><strong>you@example.com</strong></button></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item">Settings</button></li>
            <li><button className="dropdown-item text-danger">Sign out</button></li>
          </ul>
        )}
      </div>
    </header>
  );
}
