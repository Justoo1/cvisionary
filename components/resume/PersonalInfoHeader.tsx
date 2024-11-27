import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BorderStyles } from "../shared/BorderStyleButton";
import { ResumeSectionProps, TEMPLATENAMES } from "@/types";
import { cn } from "@/lib/utils";

const PersonalInfoHeader = ({
  resumeData,
  className,
  templateName,
}: ResumeSectionProps) => {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    colorHex,
    borderStyle,
  } = resumeData;
  const [photoUrl, setPhotoUrl] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoUrl(objectUrl);
    if (photo === null) setPhotoUrl("");
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [photo]);

  return (
    <div className={cn("flex items-center gap-6", className)}>
      {photoUrl && (
        <Image
          src={photoUrl}
          alt="Resume Author photo"
          width={100}
          height={100}
          className={cn(
            "aspect-square object-cover",
            templateName === TEMPLATENAMES.CANADA ? "hidden" : "",
          )}
          style={{
            borderRadius:
              borderStyle === BorderStyles.SQUARE
                ? "0"
                : borderStyle === BorderStyles.CIRCLE
                  ? "50%"
                  : "10%",
          }}
        />
      )}
      <div className="space-y-2.5">
        <div className="space-y-1">
          <p className="text-3xl font-bold" style={{ color: colorHex }}>
            {firstName} {lastName}
          </p>
          <p className="font-medium" style={{ color: colorHex }}>
            {jobTitle}
          </p>
        </div>
        <p
          className={cn(
            "text-xs text-gray-500",
            templateName === TEMPLATENAMES.CREATIVE ? "flex flex-wrap" : "",
          )}
        >
          {city}
          {city && country && ", "}
          {country}
          {(city || country) && (phone || email) && " • "}
          {[phone, email].filter(Boolean).join(" • ")}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfoHeader;
