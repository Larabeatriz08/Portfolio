import {
  User,
  Briefcase,
  FlaskConical,
  Wrench,
  Mail,
  Minus,
  Square,
  X,
} from "lucide-react";

import Identify from "../../apps/Identify";

type Props = {
  app: string;
  onClose: () => void;
};

export default function AppWindow({
  app,
  onClose,
}: Props) {
  function renderApp() {
    switch (app) {
      case "identify":
        return <Identify />;

      case "workspace":
        return (
          <div className="text-white text-3xl">
            Workspace
          </div>
        );

      case "research":
        return (
          <div className="text-white text-3xl">
            Research
          </div>
        );

      case "toolkit":
        return (
          <div className="text-white text-3xl">
            Toolkit
          </div>
        );

      case "connect":
        return (
          <div className="text-white text-3xl">
            Connect
          </div>
        );

      default:
        return (
          <div className="text-white">
            Application not found.
          </div>
        );
    }
  }

  function getTitle() {
    switch (app) {
      case "identify":
        return "Identify";

      case "workspace":
        return "Workspace";

      case "research":
        return "Research";

      case "toolkit":
        return "Toolkit";

      case "connect":
        return "Connect";

      default:
        return "Application";
    }
  }

  function getIcon() {
    switch (app) {
      case "identify":
        return <User size={18} />;

      case "workspace":
        return <Briefcase size={18} />;

      case "research":
        return <FlaskConical size={18} />;

      case "toolkit":
        return <Wrench size={18} />;

      case "connect":
        return <Mail size={18} />;

      default:
        return null;
    }
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/25
        backdrop-blur-md
        animate-in
        fade-in
        duration-300
      "
    >
      <div
        className="
          flex
          h-[720px]
          w-[1180px]
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#111113]
          shadow-[0_40px_100px_rgba(0,0,0,.6)]
          animate-in
          zoom-in-95
          duration-300
        "
      >
       

        <header
          className="
            flex
            h-14
            items-center
            justify-between
            border-b
            border-white/5
            bg-[#18181B]
            px-6
          "
        >
          <div className="flex items-center gap-4">
            

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-red-500
                  transition
                  hover:scale-110
                "
              />

              <button
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-yellow-500
                "
              />

              <button
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-green-500
                "
              />
            </div>

            {/* TÍTULO */}

            <div className="flex items-center gap-2 text-zinc-300">

              {getIcon()}

              <span className="font-medium">

                {getTitle()}

              </span>

            </div>
          </div>

       

          <div className="flex items-center gap-4 text-zinc-500">

            <Minus size={16} />

            <Square size={14} />

            <X
              size={16}
              onClick={onClose}
              className="cursor-pointer hover:text-white"
            />

          </div>
        </header>


        <div className="flex-1 overflow-hidden">

          {renderApp()}

        </div>
      </div>
    </div>
  );
}