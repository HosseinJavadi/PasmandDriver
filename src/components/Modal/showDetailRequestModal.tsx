import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { SaveRequestModalInterface } from ".";
import { Modal } from "./Modal";
import "leaflet/dist/leaflet.css";
import { Icon as IconLeaflet, LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { useAppSelector, useFetch } from "../../hooks";
import { RequestApi } from "../../apis";
import { Icon } from "../../asset/icons";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { useNavigate } from "react-router-dom";
import { TimeSheetRequestsEnum } from "../../interfaces/Timesheet";

const legalIcon = new IconLeaflet({
  iconUrl: "/location.png",
  iconSize: [35, 35],
});

function LocationMarker({ lat, lang }: { lat: number; lang: number }) {
  const [position, setPosition] = useState<{ lat: number; lang: number }>({
    lat: lat,
    lang: lang,
  });
  const getGeo = useFetch<any, unknown, { lat: number; lon: number }>({
    request: RequestApi.getGeoInformation(),
    fetchInitial: false,
  });
  useEffect(() => {
    getGeo.reFetch(null, { lat: position.lat, lon: position.lang });
  }, []);
  return position === undefined ? null : (
    <Marker
      position={{ lat: position.lat, lng: position.lang }}
      icon={legalIcon}
    >
      <Popup>
        <p className="font-bold text-center" style={{ fontFamily: "IRANSans" }}>
          {getGeo.data?.data?.address}
        </p>
      </Popup>
    </Marker>
  );
}

const ShowRequestDetailModal: React.FC<SaveRequestModalInterface> = (props) => {
  const user = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const saveActiveRequest = useFetch<
    unknown,
    { timeSheetRequest: string },
    unknown
  >({
    request: RequestApi.saveActiveTimeSheetRequest(
      user.accessToken!,
      user.refreshToken!
    ),
    onSuccess(data) {
      window.open(
        `geo:${props.timeSheetRequest?.lat},${props.timeSheetRequest?.lang}`,
        "_blank",
        "location=yes"
      );
      setTimeout(() => {
        navigate(`/Request/RequestConfirm/${props.timeSheetRequest?.id}`);
      }, 100);
    },
  });

  return (
    <>
      <Loading isLoading={saveActiveRequest.isLoading} />
      <Modal {...props} className="w-full" title="اطلاعات درخواست">
        <MapContainer
          className="map-container min-h-96 w-full"
          center={[
            parseFloat(props.timeSheetRequest?.lat!),
            parseFloat(props.timeSheetRequest?.lang!),
          ]}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker
            lang={parseFloat(props.timeSheetRequest?.lang!)}
            lat={parseFloat(props.timeSheetRequest?.lat!)}
          />
        </MapContainer>

        <p className="text-center text-sm font-bold mt-10">
          آدرس : {props.timeSheetRequest?.address}
        </p>
        <Button
          title="ثبت و مسیریابی"
          className={{ className: "mx-auto mt-4 w-44" }}
          onClick={() => {
            if (
              props.timeSheetRequest?.status ===
              TimeSheetRequestsEnum.movingDriver
            )
              window.open(
                `geo:${props.timeSheetRequest?.lat},${props.timeSheetRequest?.lang}`,
                "_blank",
                "location=yes"
              );
            else {
              saveActiveRequest.reFetch({
                timeSheetRequest: props.timeSheetRequest?.id!,
              });
            }
          }}
        />
      </Modal>
    </>
  );
};

export default ShowRequestDetailModal;
